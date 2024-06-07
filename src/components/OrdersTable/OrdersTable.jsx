// @ts-nocheck
import React, { useState } from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderItem from "./OrderItem/OrderItem";
import { TH } from "../Dashboard/RecentCustomers/RecentCustomers.styled";
import { PageBtn, Pagination, Table } from "./OrdersTable.styled";

const OrdersTable = () => {
  const { orders } = useOrders();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders =orders?.length > 5 ? orders.slice(startIndex, endIndex) : orders;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section>
      <Table>
        <caption>All orders</caption>
        <thead>
          <tr>
            <TH>User Info</TH>
            <TH>Address</TH>
            <TH>Products</TH>
            <TH>Order date</TH>
            <TH>Price</TH>
            <TH>Status</TH>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => <OrderItem key={order._id} order={order} />)}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn key={i} isActive={currentPage === i + 1} onClick={() => handlePageChange(i + 1)}></PageBtn>
        ))}
      </Pagination>
    </section>
  );
};

export default OrdersTable;
