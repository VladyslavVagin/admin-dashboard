import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../../schemas/shemas";
import Modal from "../../Common/Modal/Modal";
import { TitleForm } from "./AddProductForm.styled";

const AddProductForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductSchema) });

    const onSubmit = (data) => console.log(data);

  return (
    <Modal fn={setShowModal}>
      <TitleForm>Add a new product</TitleForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <input type="text" {...register("product_info")} placeholder="Product Info"/>
            <p>{errors?.product_info?.message}</p>
        </label>
      </form>
    </Modal>
  );
};

export default AddProductForm;
