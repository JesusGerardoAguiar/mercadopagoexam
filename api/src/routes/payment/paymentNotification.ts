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
    console.log(req);
    return res.status(200);
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
});

export default app;
