/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
const products = [
  {
    id: 1234,
    title: "Iphone X",
    unit_price: 1000,
    currency_id: "",
    description: "Dispositivo móvil de Tienda e-commerce",
    category_id: "iphone",
    picture_url:
      "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Iphone XY",
    unit_price: 2000,
    currency_id: "UYU",
    description: "Dispositivo móvil de Tienda e-commerce",
    category_id: "iphone",
    picture_url:
      "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
    quantity: 1,
  },
];

const checkoutInfo = {

    payer: {
      name: "Lalo",
      surname: "Landa",
      email: "test_user_63274575@testuser.com",
      phone: {
        area_code: "11",
        number: "22223333",
      },
      address: {
        street_name: "Falsa",
        street_number: 123,
        zip_code: "1111",
      },
    },
}
const OrderInfo = ({ orderClass, orderInfoParsed}) => {
  const productSelected = products.filter(
    (product) => product.id === 1234
  );
  const renderTable = (cartData) => {
      return (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre del Producto</th>
              <th>Precio</th>
              <th>Cant</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cartData.map((cartItem, key) => {
              const finalProductPrice = cartItem.unit_price;
              return (
                <tr key={key}>
                  <td className="product-thumbnail">
                      <img
                      style={{     width: '5rem'}}
                        className="img-fluid"
                        src={process.env.PUBLIC_URL + cartItem.picture_url}
                        alt=""
                      />
                  </td>

                  <td className="product-name">
                    
                      {cartItem.title}
                  </td>

                  <td className="product-price-cart">
                      <>
                        <span className="amount old">
                          {`$${cartItem.unit_price}`}
                        </span>
                      </>
                  </td>

                  <td className="product-quantity">
                    <div className="cart-plus-minus">
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={cartItem.quantity}
                        readOnly
                      />
                    </div>
                  </td>
                  <td className="product-subtotal">
                    ${finalProductPrice * cartItem.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
  };

  const renderItems = () =>
     (
      <>
        <div className="row">
          <div className="col-12">
            <div className="table-content table-responsive cart-table-content">
              {renderTable(productSelected)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12" style={{ paddingTop: "2rem" }}>
            <div className="grand-totall">
              <div className="title-wrap">
                <h4 className="cart-bottom-title section-bg-gary-cart">
                  Total del carrito
                </h4>
              </div>

              <h4 className="grand-totall-title">
                Total <span>{`$${productSelected[0].unit_price}`}</span>
              </h4>
            </div>
          </div>
        </div>
      </>
    
    );

  const renderPayerInfo = () => (
    <div className="row">
      <div className="col-lg-7">
        <div className="billing-info-wrap">
          <h3>Detalle de Pago</h3>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Nombre</label>
                <input
                  type="text"
                  required
                  name="name"
                  disabled
                  value={checkoutInfo.payer.name}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Apellido</label>
                <input
                  type="text"
                  required
                  name="surname"
                  disabled
                  value={checkoutInfo.payer.surname}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Dirección de envio</label>
                <input
                  className="billing-address"
                  placeholder="Calle, número de puerta"
                  type="text"
                  required
                  name="streetName"
                  disabled
                  value={checkoutInfo.payer.address.street_name}
                />
              </div>
            </div>
          
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Número Telefónico</label>
                <input
                  type="text"
                  required
                  name="phone"
                  disabled
                  value={checkoutInfo.payer.phone.number}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Email</label>
                <input
                  type="text"
                  required
                  name="email"
                  disabled
                  value={checkoutInfo.payer.email}
                />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
     
        <div className="main-div">
          <h1>{orderClass.headText}</h1>
          <div className="shop-review">
            <p
              dangerouslySetInnerHTML={{ __html: orderClass.subText }}
            />
            <h3>Detalle de compra</h3>
            {orderClass.showInfo && (
              <>
                {renderItems()}
                {renderPayerInfo()}
              </>
            )}
          </div>
          <div>
          payment_method_id: {orderInfoParsed.payment_type}<br />
          external_reference: {orderInfoParsed.external_reference}<br />
          preference_id: {orderInfoParsed.preference_id}<br />
          payment_id: {orderInfoParsed.payment_id}<br />
          collection_id: {orderInfoParsed.collection_id}<br />
          </div>
        </div>
    </>
  );
};
export default OrderInfo;
