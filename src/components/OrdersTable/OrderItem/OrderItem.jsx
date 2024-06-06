import React from "react";
import { ColumnContent } from "./OrderItem.styled";

const OrderItem = ({ order }) => {
  return (
    <>
      <tr key={order._id}>
        <ColumnContent>
          <img src={order.photo} alt={order.name} width={24} height={24}/>
          <p>{order.name}</p>
        </ColumnContent>
        <ColumnContent>
          <address>{order.address}</address>
        </ColumnContent>
        <ColumnContent>
          <span>{order.products}</span>
        </ColumnContent>
        <ColumnContent>
          <time>{order.order_date}</time>
        </ColumnContent>
        <ColumnContent>
          <span>{order.price}</span>
        </ColumnContent>
        <ColumnContent>
          <span>{order.status}</span>
        </ColumnContent>
      </tr>
    </>
  );
};

export default OrderItem;
