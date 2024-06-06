// @ts-nocheck
import styled from "@emotion/styled";

export const ContentUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

  img {
    border-radius: 50%;
  }
`;

export const ColumnContent = styled.td`
  min-width: 96px;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;
  text-align: flex-start;

  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(2) {
    padding-right: 8px;
    padding-left: 8px;
    text-align: center;
  }

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

  &:last-of-type {
    padding-left: 14px;
  }

  @media screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 20px 0;

    &:last-of-type {
      padding-left: 20px;
    }
  }
`;

export const StatusOrder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  width: 92px;
  min-width: 92px;
  min-height: 25px;
  height: 25px;
  background-color: rgba(89, 177, 122, 0.1);
  color: ${({ status }) =>
      status === "Completed"
        ? "var(--accent-color)"
        : status === "Confirmed"
        ? "#8059e4"
        : status === "Pending"
        ? "#f79042"
        : status === "Cancelled"
        ? "#e85050"
        : "#70a6e8"};
`;
