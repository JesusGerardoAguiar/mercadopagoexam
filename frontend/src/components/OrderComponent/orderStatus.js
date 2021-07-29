const orderStatus = [
  {
    status: "approved",
    link: "success-checkout",
    headText: "Su pago se ha completado",
    showInfo: true,
  },
  {
    status: "pending",
    link: "pending-checkout",
    headText:
      "Su ha creado su Pre Orden, debe pagar en la Red de Cobranza elegida por vos.",
    showInfo: true,
  },
  {
    status: "failure",
    link: "fail-checkout",
    headText:
      "Su pago se no se ha podido completar, por favor comunicate con nosotros a traves de nuestro mail, o whatsapp.",
    showInfo: false,
  },
  {
    status: "transfer",
    link: "pending-checkout",
    headText: "Transferencia bancaria",
    subText:
      "<div class='d-flex flex-row justify-content-center'> <div class='d-flex align-items-start mr-40'><img src='assets/img/itau-logo.svg' class='mr-15'/><span class='text-start'>ITAU <br /> caja de ahorro $ <br /> 7648256<br /> LUCIA ARMSTRONG </span></div> <div class='text-start'><span class='text-start'>Una vez hecha la transferencia / deposito <br />debes enviarnos el comprobante por mail a: <br /><b>clannadesign@gmail.com</b> o por whatsapp al <a href='https://api.whatsapp.com/send?phone=+59899944831+&'>+598 099 944 831.</a> <br />De lo contrario <b>no se procesara tú compra. </span></div> </div> <div class='d-flex mt-40 justify-content-center'><span>Pasadas las 36hs hábiles, de no recibir el pago y su comprobante el producto vuelve a stock.</span> </div>    <div class='return-div' style='text-align: center; margin-top: 2rem; padding-top: 2rem;'><a class='return-button' href='https://api.whatsapp.com/send?phone=+59899944831+&' target='_blank'>Confirmar Compra</a></div></b>",
    showInfo: true,
  },
  {
    status: "cash",
    link: "pending-checkout",
    headText: "En efectivo",
    subText:
      "Una vez tu pedido este pronto para retirar, te enviaremos un mail con la ubicación exacta para <strong>coordinar</strong> el dia y la hora del retiro. Favor traer el monto justo ya que <strong>no manejamos cambio.<strong/>",
    showInfo: true,
  },
];
export default orderStatus;
