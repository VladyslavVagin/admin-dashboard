// @ts-nocheck
import styled from "@emotion/styled";

export const TH = styled.th`
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: var(--placeholder-color);
  padding: 14px 0;
`;

export const TDtype = styled.td`
  border-bottom: 1px solid var(--border-color);

  p {
    background: ${({ itemtype }) =>
      itemtype === "Expense"
        ? "var(--expense-bg)"
        : itemtype === "Error"
        ? "var(--border-color)"
        : "var(--income-bg)"};
    color: ${({ itemtype }) =>
      itemtype === "Expense"
        ? "var(--expense-color)"
        : itemtype === "Error"
        ? "var(--main-black)"
        : "var(--accent-color)"};
    border-radius: 40px;
    width: 80px;
    height: 23px;
    min-height: 23px;
    min-width: 80px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.05em;
    text-align: center;
    padding-top: 4px;
  }
`;

export const TDname = styled.td`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.29;
  color: var(--main-black);
  text-align: left;
  padding-left: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-color);

  @media screen and (min-width: 375px){
    font-size: 14px;
  }
`;

export const TDamount = styled.td`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.29;
  color: ${({ itemtype }) =>
    itemtype === "Expense"
      ? "var(--expense-color)"
      : itemtype === "Error"
      ? "var(--main-black)"
      : "var(--accent-color)"};
  text-align: right;
  text-decoration: ${({ itemtype }) =>
    itemtype === "Error" ? "line-through" : "none"};
  border-bottom: 1px solid var(--border-color);

  @media screen and (min-width: 375px){
    font-size: 14px;
  }
`;
