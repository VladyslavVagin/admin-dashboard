// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomers } from '../../redux/customers/operations';
import { PageContainer } from '../../components/Common/PageContainer';

const Customers = () => {
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getCustomers());
 }, [dispatch]);

  return (
    <PageContainer>Customers</PageContainer>
  )
}

export default Customers;