import React, {useState} from "react";
import axios from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API,
	timeout: 50000
});

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
    description: "Este es un iphone XY",
    category_id: "iphone",
    picture_url:
      "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
    quantity: 1,
  },
];
const Product = (props) => {
    const [initPoint, setInitPoint] = useState('');
  const id = props.match.params.id;
  const productSelected = products.filter(
    (product) => product.id === parseInt(id)
  )[0];

  const generateCheckoutLink = async () => {
    const checkoutInfo = {
      items: [{...productSelected}],
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
      back_urls: {
        success: `${process.env.REACT_APP_RETURN_URL}success`,
        failure: `${process.env.REACT_APP_RETURN_URL}failure`,
        pending: `${process.env.REACT_APP_RETURN_URL}pending`,
      },
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "amex",
          },
        ],
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 6,
      },
      notification_url: `${process.env.REACT_APP_API}payment-notification`,
      external_reference: "aguiarf.j16@gmail.com",
      auto_return: "all",
    };

    const response = await axiosClient.post('basic-checkout', { ...checkoutInfo });
    console.log(response);
    debugger;
    setInitPoint(response.data.init_point);
  };

  return (
    <div>
      <h1>{productSelected.category_id}</h1>
      <div>
        <img src={productSelected.picture_url} />
        <h2>{productSelected.title}</h2>
        <p>{productSelected.description}</p>
        <p>
          {productSelected.unit_price} {productSelected.currency_id}
        </p>
        <button onClick={() => generateCheckoutLink()}>Generar Link</button>

        {initPoint!=='' && <a href={initPoint}>
            Pagar
        </a>}
      </div>
    </div>
  );
};

export default Product;
