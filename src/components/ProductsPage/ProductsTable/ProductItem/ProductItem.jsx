// @ts-nocheck
import React, { useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";
import Loader from "../../../Common/Loader/Loader";
import Buttons from "../../Buttons/Buttons";
import EditProductForm from "../../EditProductForm/EditProductForm";
import { ColumnContent } from "../../../OrdersTable/OrderItem/OrderItem.styled";

const ProductItem = ({ product }) => {
  const { name, category, price, stock, suppliers, _id } = product;
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { productsLoading } = useProducts();
  const isLoading = productsLoading && isSubmitting;

  return (
    <>
      {isEdit && <EditProductForm setIsEdit={setIsEdit} product={product} setIsSubmitting={setIsSubmitting} />}
      <tr>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : name}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : category}</p>
        </ColumnContent>
        <ColumnContent>
          <span>{isLoading ? <Loader/> : stock}</span>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : suppliers}</p>
        </ColumnContent>
        <ColumnContent>
          <span>{isLoading ? <Loader/> : price}</span>
        </ColumnContent>
        <ColumnContent>
          <Buttons id={_id} setIsEdit={setIsEdit} setIsSubmitting={setIsSubmitting} />
        </ColumnContent>
      </tr>
    </>
  );
};

export default ProductItem;
