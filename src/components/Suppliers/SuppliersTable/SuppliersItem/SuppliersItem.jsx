// @ts-nocheck
import React from "react";
import EditBtn from "../../EditBtn/EditBtn";
import { ColumnContent } from "../../../ProductsPage/ProductsTable/ProductItem/ProductItem.styled";
import { Status } from "./SuppliersItem.styled";

const SuppliersItem = ({ supplier }) => {
  const { name, address, _id, status, amount, date, suppliers } = supplier;
  const amountValue = amount.substring(1);

  return (
    <>
      <tr>
        <ColumnContent>
          <p>{name}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{address}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{suppliers}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{date}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{amountValue}</p>
        </ColumnContent>
        <ColumnContent>
          <Status status={status.toString()}>{status}</Status>
        </ColumnContent>
        <ColumnContent>
          <EditBtn />
        </ColumnContent>
      </tr>
    </>
  );
};

export default SuppliersItem;
