// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { editSupplier } from "../../../redux/suppliers/operations";
import DeliveryDate from "../AddSupplierForm/DeliveryDate/DeliveryDate";
import { editSupplierSchema } from "../../../schemas/shemas";
import StatusSelect from "../AddSupplierForm/StatusSelect/StatusSelect";
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
import { toast } from "react-toastify";

const EditSupplierForm = ({ setIsModalOpen, supplier }) => {
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState(supplier.date);
  const [statusValue, setStatusValue] = useState(supplier.status);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editSupplierSchema) });

  useEffect(() => {
    if (dateValue) {
      setValue("date", dateValue);
    }

    if (statusValue) {
      setValue("status", statusValue);
    }
  }, [dateValue, statusValue, setValue]);

  const onSubmit = (data) => {
    dispatch(editSupplier({ data, id: supplier._id }))
    setIsModalOpen(false);
  };

  return (
    <Modal fn={setIsModalOpen}>
      <TitleForm>Edit supplier</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              defaultValue={supplier.name}
              {...register("name")}
              placeholder="Suppliers Info"
            />
            <ErrorText>{errors?.name?.message}</ErrorText>
          </label>
          <label>
            <Input
              type="text"
              {...register("address")}
              defaultValue={supplier.address}
              placeholder="Address"
            />
            <ErrorText>{errors?.address?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              {...register("suppliers")}
              defaultValue={supplier.suppliers}
              placeholder="Company"
            />
            <ErrorText>{errors?.suppliers?.message}</ErrorText>
          </label>
          <label>
            <DeliveryDate setDateValue={setDateValue} dateValue={dateValue} />
            <InvisibleInput type="text" {...register("date")} defaultValue={supplier.date} />
            <ErrorText>{errors?.date?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              {...register("amount")}
              defaultValue={supplier.amount.substring(1)}
              placeholder="Amount"
            />
            <ErrorText>{errors?.amount?.message}</ErrorText>
          </label>
          <label>
            <StatusSelect
              setStatusValue={setStatusValue}
              statusValue={statusValue}
            />
            <InvisibleInput type="text" {...register("status")} defaultValue={supplier.status} />
            <ErrorText>{errors?.status?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <ButtonsModal title="Save" cancelAction={setIsModalOpen} />
      </Form>
    </Modal>
  );
};

export default EditSupplierForm;
