// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSuppliers } from "../../redux/suppliers/operations";
import { PageContainer } from "../../components/Common/PageContainer";
import FilterSuppliers from "../../components/Suppliers/FilterSuppliers/FilterSuppliers";

const Suppliers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterSuppliers />
    </PageContainer>
  );
};

export default Suppliers;
