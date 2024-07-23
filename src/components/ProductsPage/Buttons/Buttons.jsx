// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteProduct } from "../../../redux/products/operations";
import sprite from "../../../assets/sprite.svg";
import { ButtonDelete, ButtonEdit, FlexContainer } from "./Buttons.styled";

const Buttons = ({ id, setIsEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
    toast.success("Product deleted successfully");
  };

  const handleEdit = () => setIsEdit(true);

  return (
    <>
      <FlexContainer>
        <ButtonEdit type="button" onClick={handleEdit}>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-edit`}></use>
          </svg>
        </ButtonEdit>
        <ButtonDelete type="button" onClick={handleDelete}>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-trash`}></use>
          </svg>
        </ButtonDelete>
      </FlexContainer>
    </>
  );
};

export default Buttons;
