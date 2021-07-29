import { Router } from 'express';
import basicCheckout from './payment/basicCheckout';
import paymentNotification from './payment/paymentNotification';
const app = Router();

app.use('/basic-checkout', basicCheckout);
app.use('/payment-notification', paymentNotification);
export default app;
