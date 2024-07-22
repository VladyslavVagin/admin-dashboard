import React from 'react';
import { ColumnContent } from "./ProductItem.styled";

const ProductItem = ({product}) => {
const { name, category, price, stock, suppliers, _id } = product;

  return (
    <>
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
        <div>Buttons</div>
      </ColumnContent>
    </tr>
  </>
  )
}

export default ProductItem