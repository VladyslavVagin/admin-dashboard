import styled from "@emotion/styled";

export const ColumnContent = styled.td`
  min-width: 96px;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;
  text-align: flex-start;

  &:first-of-type {
    min-width: 190px;
    max-width: 190px;
  }

  &:nth-of-type(2) {
    min-width: 240px;
    max-width: 240px;
  }

  &:nth-of-type(3) {
    min-width: 280px;
    max-width: 280px;
  }

  &:nth-of-type(4) {
    min-width: 130px;
    max-width: 130px;
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
      min-width: 280px;
      max-width: 280px;
    }

    &:nth-of-type(3) {
      min-width: 360px;
      max-width: 360px;
    }

    &:nth-of-type(4) {
      min-width: 160px;
      max-width: 160px;
    }

    &:nth-of-type(5) {
      min-width: 160px;
      max-width: 160px;
    }
  }
`;
