// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardInfo } from '../../redux/dashboard/operations';
import Statistic from '../../components/Dashboard/Statistic/Statistic';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardInfo());
  }, [dispatch]);

  return (
    <div>
      <Statistic />
    </div>
  )
}

export default Dashboard