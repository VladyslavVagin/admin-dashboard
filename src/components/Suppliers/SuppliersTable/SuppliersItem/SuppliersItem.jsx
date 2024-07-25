// @ts-nocheck
import React, { useState } from "react";
import EditBtn from "../../EditBtn/EditBtn";
import EditSupplierForm from "../../EditSupplierForm/EditSupplierForm";
import { ColumnContent } from "../../../ProductsPage/ProductsTable/ProductItem/ProductItem.styled";
import { Status } from "./SuppliersItem.styled";

const SuppliersItem = ({ supplier }) => {
  const { name, address, status, amount, date, suppliers } = supplier;
  let amountValue = amount;
  if (amount.charAt(0) === "৳") {
    amountValue = amount.substring(1);
  }
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      {openEditModal && (
        <EditSupplierForm
          setIsModalOpen={setOpenEditModal}
          supplier={supplier}
        />
      )}
      <tr>
        <ColumnContent>
          <p>{name}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{address}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{suppliers}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{date}</p>
        </ColumnContent>
        <ColumnContent>
          <p>{amountValue}</p>
        </ColumnContent>
        <ColumnContent>
          <Status status={status.toString()}>{status}</Status>
        </ColumnContent>
        <ColumnContent>
          <EditBtn setOpenEditModal={setOpenEditModal} />
        </ColumnContent>
      </tr>
    </>
  );
};

export default SuppliersItem;
