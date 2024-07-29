// @ts-nocheck
import React, { useState } from "react";
import EditBtn from "../../EditBtn/EditBtn";
import { useSuppliers } from "../../../../hooks/useSuppliers";
import EditSupplierForm from "../../EditSupplierForm/EditSupplierForm";
import { ColumnContent } from "../../../OrdersTable/OrderItem/OrderItem.styled";
import { Status } from "./SuppliersItem.styled";
import Loader from "../../../Common/Loader/Loader";

const SuppliersItem = ({ supplier }) => {
  const { name, address, status, amount, date, suppliers } = supplier;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { suppliersLoading } = useSuppliers();
  let amountValue = amount;
  if (amount.charAt(0) === "৳") {
    amountValue = amount.substring(1);
  }
  const [openEditModal, setOpenEditModal] = useState(false);
  const isLoading = suppliersLoading && isSubmitting;

  return (
    <>
      {openEditModal && (
        <EditSupplierForm
          setIsModalOpen={setOpenEditModal}
          supplier={supplier}
          setIsSubmitting={setIsSubmitting}
        />
      )}
      <tr>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : name}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : address}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : suppliers}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : date}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{isLoading ? <Loader/> : amountValue}</p>
        </ColumnContent>
        <ColumnContent>
          <Status status={status.toString()}>{isLoading ? <Loader/> : status}</Status>
        </ColumnContent>
        <ColumnContent>
          <EditBtn setOpenEditModal={setOpenEditModal} />
        </ColumnContent>
      </tr>
    </>
  );
};

export default SuppliersItem;
