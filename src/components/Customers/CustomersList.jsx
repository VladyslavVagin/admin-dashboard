// @ts-nocheck
import React, { useState } from "react";
import { useCustomers } from "../../hooks/useCustomers";
import CustomerItem from "./CustomerItem/CustomerItem";
import { TH } from "../Dashboard/RecentCustomers/RecentCustomers.styled";
import { Table, PageBtn } from "../OrdersTable/OrdersTable.styled";
import { Pagination } from "../OrdersTable/OrdersTable.styled";

const CustomersList = () => {
  const { customers } = useCustomers();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers =
    customers?.length > 5 ? customers.slice(startIndex, endIndex) : customers;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section>
      <Table>
        <caption>All customers</caption>
        <thead>
          <tr>
            <TH>User Info</TH>
            <TH>Email</TH>
            <TH>Address</TH>
            <TH>Phone</TH>
            <TH>Register date</TH>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <CustomerItem key={customer._id} customer={customer} />
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

export default CustomersList;
