// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../redux/orders/operations';

const Orders = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getOrders());
}, [dispatch]);

  return (
    <div>Orders</div>
  )
}

export default Orders;