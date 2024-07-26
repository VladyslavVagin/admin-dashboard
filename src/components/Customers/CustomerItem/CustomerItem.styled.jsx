import styled from "@emotion/styled";

export const ColumnContent = styled.td`
  min-width: 96px;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 8px 14px 24px;
  text-align: flex-start;

  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(2) {
    padding-right: 8px;
    padding-left: 24px;
  }

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

  &:last-of-type {
    padding-left: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 20px 0;

    &:last-of-type {
      padding-left: 20px;
    }
  }
`;