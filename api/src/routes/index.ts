import { Router } from 'express';
import basicCheckout from './payment/basicCheckout';

const app = Router();

app.use('/basic-checkout', basicCheckout);
export default app;
