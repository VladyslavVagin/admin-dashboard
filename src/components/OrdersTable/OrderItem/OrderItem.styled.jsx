// @ts-nocheck
import styled from "@emotion/styled";

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;

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

  &:first-of-type {
    min-width: 160px;
    max-width: 160px;
  }

  &:nth-of-type(2) {
    min-width: 240px;
    max-width: 240px;
  }

  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(2) {
    padding-left: 20px;
  }

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

  &:last-of-type {
    padding-left: 14px;
  }

  @media screen and (min-width: 375px) {
    font-size: 12px;
    min-width: 120px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 20px 0;

    &:last-of-type {
      padding-left: 20px;
    }

    &:first-of-type {
      min-width: 240px;
      max-width: 240px;
    }

    &:nth-of-type(2) {
      min-width: 300px;
      max-width: 300px;
    }

    &:nth-of-type(4) {
      min-width: 190px;
      max-width: 190px;
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
  background-color: ${({ status }) =>
    status === "Completed"
      ? "rgba(89, 177, 122, 0.1)"
      : status === "Confirmed"
      ? "rgba(128, 89, 228, 0.1)"
      : status === "Pending"
      ? "rgba(247, 144, 66, 0.1)"
      : status === "Cancelled"
      ? "rgba(232, 80, 80, 0.1)"
      : "rgba(112, 166, 232, 0.1)"};
  color: ${({ status }) =>
    status === "Completed"
      ? "var(--accent-color)"
      : status === "Confirmed"
      ? "#8059e4"
      : status === "Pending"
      ? "#f79042"
      : status === "Cancelled"
      ? "#e85050"
      : status === "Processing"
      ? "yellow"
      : status === "Delivered"
      ? "brown"
      : "#70a6e8"};
`;
