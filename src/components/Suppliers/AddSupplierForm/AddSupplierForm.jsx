import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import DeliveryDate from "./DeliveryDate/DeliveryDate";
import { addSupplierSchema } from "../../../schemas/shemas";
import Modal from "../../Common/Modal/Modal";
import {
  TitleForm,
  Form,
  FlexInputContainer,
  Input,
  ErrorText,
  InvisibleInput,
} from "../../ProductsPage/AddProductForm/AddProductForm.styled";

const AddSupplierForm = ({ setIsModalOpen }) => {
  const [dateValue, setDateValue] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSupplierSchema) });

  const onSubmit = (data) => console.log(data);

  return (
    <Modal fn={setIsModalOpen}>
      <TitleForm>Add a new suppliers</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              {...register("name")}
              placeholder="Suppliers Info"
            />
            <ErrorText>{errors?.name?.message}</ErrorText>
          </label>
          <label>
            <Input type="text" {...register("address")} placeholder="Address" />
            <ErrorText>{errors?.address?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              {...register("suppliers")}
              placeholder="Company"
            />
            <ErrorText>{errors?.suppliers?.message}</ErrorText>
          </label>
          <label>
            <DeliveryDate setDateValue={setDateValue} />
            <InvisibleInput type="text" {...register("date")} />
            <ErrorText>{errors?.date?.message}</ErrorText>
          </label>
        </FlexInputContainer>
      </Form>
    </Modal>
  );
};

export default AddSupplierForm;
