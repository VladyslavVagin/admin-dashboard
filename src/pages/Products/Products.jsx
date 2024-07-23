// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/operations';
import { getSuppliers } from '../../redux/suppliers/operations';
import { PageContainer } from '../../components/Common/PageContainer';
import Filter from '../../components/ProductsPage/Filter/Filter';
import AddProduct from '../../components/ProductsPage/AddProduct/AddProduct';
import ProductsTable from '../../components/ProductsPage/ProductsTable/ProductsTable';

const Products = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProducts());
  dispatch(getSuppliers());
}, [dispatch]);

  return (
    <PageContainer>
      <Filter />
      <AddProduct />
      <ProductsTable />
    </PageContainer>
  )
}

export default Products