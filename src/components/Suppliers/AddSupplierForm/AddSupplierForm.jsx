// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import DeliveryDate from "./DeliveryDate/DeliveryDate";
import { addSupplierSchema } from "../../../schemas/shemas";
import { addSupplier } from "../../../redux/suppliers/operations";
import StatusSelect from "./StatusSelect/StatusSelect";
import ButtonsModal from "../../Common/ButtonsModal/ButtonsModal";
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
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState(null);
  const [statusValue, setStatusValue] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSupplierSchema) });

  useEffect(() => {
    if (dateValue) {
      setValue("date", dateValue);
    }

    if (statusValue) {
      setValue("status", statusValue);
    }
  }, [dateValue, statusValue]);

  const onSubmit = (data) => {
    dispatch(addSupplier(data));
    setIsModalOpen(false);
  };

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
        <FlexInputContainer>
          <label>
            <Input type="text" {...register("amount")} placeholder="Amount" />
            <ErrorText>{errors?.amount?.message}</ErrorText>
          </label>
          <label>
            <StatusSelect
              setStatusValue={setStatusValue}
              statusValue={statusValue}
            />
            <InvisibleInput type="text" {...register("status")} />
            <ErrorText>{errors?.status?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <ButtonsModal title="Add" cancelAction={setIsModalOpen} />
      </Form>
    </Modal>
  );
};

export default AddSupplierForm;
