import React from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderItem from "./OrderItem/OrderItem";
import { TH } from "../Dashboard/RecentCustomers/RecentCustomers.styled";
import { Table } from "./OrdersTable.styled";

const OrdersTable = () => {
  const { orders } = useOrders();

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
          {orders.map((order) => <OrderItem key={order._id} order={order} />)}
        </tbody>
      </Table>
    </section>
  );
};

export default OrdersTable;
