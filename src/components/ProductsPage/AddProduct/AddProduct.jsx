import React, { useState } from "react";
import sprite from "../../../assets/sprite.svg";
import { AddProductContainer } from "./AddProduct.styled";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <AddProductContainer>
      <button type="button" onClick={() => setShowModal(true)}>
        <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <p>Add a new product</p>
    </AddProductContainer>
  );
};

export default AddProduct;
