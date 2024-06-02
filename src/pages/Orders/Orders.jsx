// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../redux/orders/operations";
import { PageContainer } from "../../components/Common/PageContainer";
import FilterBar from "../../components/FilterBar/FilterBar";

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterBar />
    </PageContainer>
  );
};

export default Orders;
