// tslint: max-line-length
// tslint: radix
// tslint: ter-prefer-arrow-callback
import { Router } from 'express';
import { error } from 'util';
const mercadopago = require('mercadopago');
const app = Router();
const dotenv = require('dotenv');

dotenv.config();

mercadopago.configure({
  access_token: process.env.MERCADO_LIBRE_ACCESS_TOKEN,
  integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
});

app.post('/', async (req, res) => {
  try {
    const items = req.body.items;
    const preference = {
      ...req.body,
      items,
      // tslint:disable-next-line: radix
      payer: { ...req.body.payer, phone: { number: parseInt(req.body.payer.phone.number) } },
    };

    mercadopago.preferences
      .create(preference)
      .then((response: any) => {
        (global as any).init_point = response.body.init_point;
        return res.json({ init_point: response.body.init_point });
      })
      .catch((error: any) => {
        return res.status(500).json({ success: false, message: error.message });
      });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
});

export default app;
