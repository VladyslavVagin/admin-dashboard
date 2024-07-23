// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../../schemas/shemas";
import { addProduct } from "../../../redux/products/operations";
import Modal from "../../Common/Modal/Modal";
import ButtonsModal from "../../Common/ButtonsModal/ButtonsModal";
import CategorySelect from "./CategorySelect/CategorySelect";
import SuppliersSelect from "./SuppliersSelect/SuppliersSelect";
import {
  Form,
  Input,
  TitleForm,
  InvisibleInput,
  ErrorText,
  FlexInputContainer,
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
  const [suppliersValue, setSuppliersValue] = useState(null);

  useEffect(() => {
    if (categoryValue) {
      setValue("category", categoryValue);
    }

    if (suppliersValue) {
      setValue("suppliers", suppliersValue);
    }
  }, [categoryValue, suppliersValue]);

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    setShowModal(false);
    toast.success("Product added successfully");
  };

  return (
    <Modal fn={setShowModal}>
      <TitleForm>Add a new product</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexInputContainer>
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
        </FlexInputContainer>
        <FlexInputContainer>
          <label>
            <SuppliersSelect
              suppliersValue={suppliersValue}
              setSuppliersValue={setSuppliersValue}
            />
            <ErrorText>{errors?.suppliers?.message}</ErrorText>
            <InvisibleInput {...register("suppliers")} type="text" />
          </label>
          <label>
            <Input type="text" {...register("stock")} placeholder="Stock" />
            <ErrorText>{errors?.stock?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <label>
          <Input type="text" {...register("price")} placeholder="Price" />
          <ErrorText>{errors?.price?.message}</ErrorText>
        </label>
        <ButtonsModal title="Add" cancelAction={setShowModal} />
      </Form>
    </Modal>
  );
};

export default AddProductForm;
