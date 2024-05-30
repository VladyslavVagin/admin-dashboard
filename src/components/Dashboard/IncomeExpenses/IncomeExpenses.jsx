import React from 'react';
import { useDashboard } from "../../../hooks/useDashboard";

const IncomeExpenses = () => {
const { incomeExpenses } = useDashboard();

  return (
    <section>
      <table>
        <caption>Income/Expenses</caption>
        <thead>
            <tr>
                <th>Today</th>
            </tr>
        </thead>
      </table>
    </section>
  )
}

export default IncomeExpenses;