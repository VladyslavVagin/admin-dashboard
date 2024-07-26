import React from "react";
import imgAvatar from "../../../assets/images/avatar/avatar.png";
import { ColumnContent } from "./CustomerItem.styled";
import { ContentUser } from "../../OrdersTable/OrderItem/OrderItem.styled";

const CustomerItem = ({ customer }) => {
  const { name, email, address, phone, register_date, image } = customer;
  return (
    <>
      <tr>
        <ColumnContent>
          <ContentUser>
            <img src={image || imgAvatar} alt={name} width={24} height={24} />
            <p>{name}</p>
          </ContentUser>
        </ColumnContent>
        <ColumnContent>
          <p>{email}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{address}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{phone}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{register_date}</p>
        </ColumnContent>
      </tr>
    </>
  );
};

export default CustomerItem;
