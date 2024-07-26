// @ts-nocheck
import React from "react";
import imgAvatar from "../../../assets/images/avatar/avatar.png";
import { ColumnContent, ContentUser, StatusOrder } from "./OrderItem.styled";

const OrderItem = ({ order }) => {
  return (
    <>
      <tr>
        <ColumnContent>
          <ContentUser>
            <img src={order.photo || imgAvatar} alt={order.name} width={24} height={24} />
            <p>{order.name}</p>
          </ContentUser>
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
          <StatusOrder status={order.status.toString()}>{order.status}</StatusOrder>
        </ColumnContent>
      </tr>
    </>
  );
};

export default OrderItem;
