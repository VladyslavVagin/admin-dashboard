import React from "react";
import EllipsisText from "react-ellipsis-text";
import { useMediaQuery } from "react-responsive";
import { useDashboard } from "../../../hooks/useDashboard";
import { ColumnContent, NameColumnContent, Section, TH, Table } from "./RecentCustomers.styled";

const RecentCustomers = () => {
  const isTablet = useMediaQuery({minWidth: 768});
  const { recentCustomers } = useDashboard();

  return (
    <Section>
      <Table>
        <caption>Recent customers</caption>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Email</TH>
            <TH>Spent</TH>
          </tr>
        </thead>
        <tbody>
          {recentCustomers.map((customer) => (
            <tr key={customer._id}>
              <ColumnContent>
                <NameColumnContent>
                  <img src={customer.image} alt={customer.name} width={24} height={24}/>
                  <p>{customer.name}</p>
                </NameColumnContent>
              </ColumnContent>
              <ColumnContent><EllipsisText text={customer.email} length={isTablet ? "40" : "22"}/></ColumnContent>
              <ColumnContent>{customer.spent}</ColumnContent>
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default RecentCustomers;
