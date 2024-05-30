// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardInfo } from '../../redux/dashboard/operations';
import Statistic from '../../components/Dashboard/Statistic/Statistic';
import { PageContainer } from '../../components/Common/PageContainer';
import RecentCustomers from '../../components/Dashboard/RecentCustomers/RecentCustomers';
import IncomeExpenses from '../../components/Dashboard/IncomeExpenses/IncomeExpenses';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardInfo());
  }, [dispatch]);

  return (
    <PageContainer>
      <Statistic />
      <div>
        <RecentCustomers/>
        <IncomeExpenses/>
      </div>
    </PageContainer>
  )
}

export default Dashboard