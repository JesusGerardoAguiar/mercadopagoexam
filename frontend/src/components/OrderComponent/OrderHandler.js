import React, { useEffect } from "react";
import { useHistory } from "react-router";
import queryString from "query-string";
import orderStatus from "./orderStatus";
import OrderInfo from "./OrderInfo";
const OrderHandler = (props) => {
  const orderInfoParsed = queryString.parse(props.location.search);

debugger;
  const orderClass = orderStatus.find(
    (or) => or.status === orderInfoParsed.status
  );

  return (
    <>
      <OrderInfo
        orderClass={orderClass}
        orderInfoParsed={orderInfoParsed}
      />
    </>
  );
};

export default OrderHandler;
