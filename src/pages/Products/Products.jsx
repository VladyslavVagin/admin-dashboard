// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getProducts,
  getProductsByQuery,
} from "../../redux/products/operations";
import { getSuppliers } from "../../redux/suppliers/operations";
import { PageContainer } from "../../components/Common/PageContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import AddProduct from "../../components/ProductsPage/AddProduct/AddProduct";
import ProductsTable from "../../components/ProductsPage/ProductsTable/ProductsTable";
import { FlexContainer } from "../Suppliers/Suppliers.styled";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSuppliers());
  }, [dispatch]);

  return (
    <PageContainer>
      <FlexContainer>
        <FilterBar
          fn={getProducts}
          fnQuery={getProductsByQuery}
          placeholder="Product Name"
        />
        <AddProduct />
      </FlexContainer>
      <ProductsTable />
    </PageContainer>
  );
};

export default Products;
