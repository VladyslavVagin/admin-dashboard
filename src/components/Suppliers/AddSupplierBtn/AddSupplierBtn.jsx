import React from "react";
import { AddBtn } from "./AddSupplierBtn.styled";

const AddSupplierBtn = ({ setIsModalOpen }) => {
  return <AddBtn type="button" onClick={() => setIsModalOpen(true)}>Add a new suppliers</AddBtn>;
};

export default AddSupplierBtn;
