import React from "react";
import sprite from "../../../assets/sprite.svg";
import { BtnStyled } from "./EditBtn.styled";

const EditBtn = () => {
  return (
    <BtnStyled type="button">
      <svg width={14} height={14}>
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
      Edit
    </BtnStyled>
  );
};

export default EditBtn;
