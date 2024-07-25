import React from "react";
import sprite from "../../../assets/sprite.svg";
import { BtnStyled } from "./EditBtn.styled";

const EditBtn = ({ setOpenEditModal }) => {
  return (
    <BtnStyled type="button" onClick={() => setOpenEditModal(true)}>
      <svg width={14} height={14}>
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
      Edit
    </BtnStyled>
  );
};

export default EditBtn;
