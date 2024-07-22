// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../../schemas/shemas";
import { addProduct } from "../../../redux/products/operations";
import Modal from "../../Common/Modal/Modal";
import ButtonsModal from "../../Common/ButtonsModal/ButtonsModal";
import CategorySelect from "./CategorySelect/CategorySelect";
import {
  Form,
  Input,
  TitleForm,
  InvisibleInput,
  ErrorText,
} from "./AddProductForm.styled";

const AddProductForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductSchema) });
  const [categoryValue, setCategoryValue] = useState(null);

  console.log(categoryValue);

  useEffect(() => {
    if (categoryValue) {
      setValue("category", categoryValue);
    }
  }, [categoryValue]);

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    setShowModal(false);
  };

  return (
    <Modal fn={setShowModal}>
      <TitleForm>Add a new product</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <Input
            type="text"
            {...register("name")}
            placeholder="Product Info"
          />
          <ErrorText>{errors?.name?.message}</ErrorText>
        </label>
        <label>
          <CategorySelect
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
          />
          <ErrorText>{errors?.category?.message}</ErrorText>
          <InvisibleInput {...register("category")} type="text" />
        </label>
        <label>
          <Input
            type="text"
            {...register("suppliers")}
            placeholder="Suppliers"
          />
          <ErrorText>{errors?.suppliers?.message}</ErrorText>
        </label>
        <label>
          <Input type="text" {...register("stock")} placeholder="Stock" />
          <ErrorText>{errors?.stock?.message}</ErrorText>
        </label>
        <label>
          <Input type="text" {...register("price")} placeholder="Price" />
          <ErrorText>{errors?.price?.message}</ErrorText>
        </label>
        <ButtonsModal title="Add" cancelAction={setShowModal}/>
      </Form>
    </Modal>
  );
};

export default AddProductForm;
