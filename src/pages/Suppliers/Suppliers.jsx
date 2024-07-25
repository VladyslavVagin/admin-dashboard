// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSuppliers,
  getSuppliersByQuery,
} from "../../redux/suppliers/operations";
import { PageContainer } from "../../components/Common/PageContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import SuppliersTable from "../../components/Suppliers/SuppliersTable/SuppliersTable";
import AddSupplierBtn from "../../components/Suppliers/AddSupplierBtn/AddSupplierBtn";
import AddSupplierForm from "../../components/Suppliers/AddSupplierForm/AddSupplierForm";
import { FlexContainer } from "./Suppliers.styled";

const Suppliers = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);

  return (
    <PageContainer>
      {isModalOpen && <AddSupplierForm setIsModalOpen={setIsModalOpen} />}
      <FlexContainer>
        <FilterBar
          fn={getSuppliers}
          fnQuery={getSuppliersByQuery}
          placeholder="User Name"
        />
        <AddSupplierBtn setIsModalOpen={setIsModalOpen} />
      </FlexContainer>
      <SuppliersTable />
    </PageContainer>
  );
};

export default Suppliers;
