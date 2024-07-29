// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useProducts } from "../../../hooks/useProducts";
import ProductItem from './ProductItem/ProductItem';
import { Pagination, PageBtn } from '../../OrdersTable/OrdersTable.styled';
import { Table } from '../../OrdersTable/OrdersTable.styled';
import { TH } from '../../Dashboard/RecentCustomers/RecentCustomers.styled';

const ProductsTable = () => {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts =products?.length > 5 ? products.slice(startIndex, endIndex) : products;

  useEffect(() => {
    if(currentProducts?.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, currentProducts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section>
    <Table>
      <caption>All products</caption>
      <thead>
        <tr>
          <TH>Product Info</TH>
          <TH>Category</TH>
          <TH>Stock</TH>
          <TH>Suppliers</TH>
          <TH>Price</TH>
          <TH>Action</TH>
        </tr>
      </thead>
      <tbody>
        {currentProducts?.map((product) => <ProductItem key={product._id} product={product} />)}
      </tbody>
    </Table>
    <Pagination>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageBtn key={i} isActive={currentPage === i + 1} onClick={() => handlePageChange(i + 1)}></PageBtn>
      ))}
    </Pagination>
  </section>
  )
}

export default ProductsTable