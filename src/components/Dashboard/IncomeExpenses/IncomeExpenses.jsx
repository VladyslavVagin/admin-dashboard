// @ts-nocheck
import React from 'react';
import { useDashboard } from "../../../hooks/useDashboard";
import { Table } from '../RecentCustomers/RecentCustomers.styled';
import { TDamount, TDname, TDtype, TH } from './IncomeExpenses.styled';

const IncomeExpenses = () => {
const { incomeExpenses } = useDashboard();

  return (
    <section>
      <Table>
        <caption>Income/Expenses</caption>
        <thead>
            <tr>
                <TH>Today</TH>
                <TH>{" "}</TH>
                <TH>{" "}</TH>
            </tr>
        </thead>
        <tbody>
         {incomeExpenses.map((item, index) => {
            return (
              <tr key={index}>
                <TDtype itemtype={item.type.toString()}><p>{item.type}</p></TDtype>
                <TDname>{item.name}</TDname>
                <TDamount itemtype={item.type.toString()}>{item.amount}</TDamount>
              </tr>
            );
         })}
        </tbody>
      </Table>
    </section>
  )
}

export default IncomeExpenses;