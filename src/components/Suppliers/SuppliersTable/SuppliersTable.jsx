// @ts-nocheck
import React, { useState } from "react";
import { useSuppliers } from "../../../hooks/useSuppliers";
import { Pagination, PageBtn } from "../../OrdersTable/OrdersTable.styled";
import { Table } from "../../OrdersTable/OrdersTable.styled";
import { TH } from "../../Dashboard/RecentCustomers/RecentCustomers.styled";
import SuppliersItem from "./SuppliersItem/SuppliersItem";

const SuppliersTable = () => {
  const { suppliers } = useSuppliers();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(suppliers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSuppliers =
    suppliers?.length > 5 ? suppliers.slice(startIndex, endIndex) : suppliers;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section>
      <Table>
        <caption>All suppliers</caption>
        <thead>
          <tr>
            <TH>Suppliers Info</TH>
            <TH>Address</TH>
            <TH>Company</TH>
            <TH>Delivery Date</TH>
            <TH>Ammount</TH>
            <TH>Status</TH>
            <TH>Action</TH>
          </tr>
        </thead>
        <tbody>
          {currentSuppliers?.map((supplier) => (
            <SuppliersItem key={supplier._id} supplier={supplier} />
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i}
            isActive={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          ></PageBtn>
        ))}
      </Pagination>
    </section>
  );
};

export default SuppliersTable;
