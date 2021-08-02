import React from "react";

const Main = () => {
    const products = [{
        id: 1234,
        title: "Iphone X",
        unit_price: 1000,
        currency_id: 'UYU',
        description: "Dispositivo móvil de Tienda e-commerce",
        category_id:'iphone',
        picture_url:'https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg'
    },
    {
        id: 1234,
        title: "Iphone XY",
        unit_price: 2000,
        currency_id: 'UYU',
        description: "Dispositivo móvil de Tienda e-commerce",
        category_id:'iphone',
        picture_url:'https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg'
    }]
  return (
    <div style={{ padding: "5rem" }}>
      <h1>Tienda e-commerce</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
          {products.map(product => (
              <div
              style={{ width: "20rem", border: "1px solid #000", height: "30rem" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${product.picture_url})`,
                }}
              />
              <div style={{ padding: '0.5rem', display: "flex", flexDirection: 'column' }}>
              <h4>{product.title}</h4>
                <p>${product.description}</p>
                <p>categoria: {product.category_id}</p>
                <p>Precio: ${product.unit_price} ${product.currency_id}</p>
              <a href={`/product/${product.id}`}>Ver Detalle</a>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Main;
