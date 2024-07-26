// @ts-nocheck
import React, { useState } from "react";
import Buttons from "../../Buttons/Buttons";
import EditProductForm from "../../EditProductForm/EditProductForm";
import { ColumnContent } from "../../../OrdersTable/OrderItem/OrderItem.styled";

const ProductItem = ({ product }) => {
  const { name, category, price, stock, suppliers, _id } = product;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit && <EditProductForm setIsEdit={setIsEdit} product={product} />}
      <tr>
        <ColumnContent>
          <p>{name}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{category}</p>
        </ColumnContent>
        <ColumnContent>
          <span>{stock}</span>
        </ColumnContent>
        <ColumnContent>
          <p>{suppliers}</p>
        </ColumnContent>
        <ColumnContent>
          <span>{price}</span>
        </ColumnContent>
        <ColumnContent>
          <Buttons id={_id} setIsEdit={setIsEdit} />
        </ColumnContent>
      </tr>
    </>
  );
};

export default ProductItem;
