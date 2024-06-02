import styled from "@emotion/styled";

export const Section = styled.section`
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 14px;

  caption {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    color: var(--main-black);
    height: 48px;
    background-color: var(--bg-color);
    border: 0px solid rgba(29, 30, 33, 0.08);
    border-radius: 8px 8px 0 0;
    padding: 14px;
    text-align: left;
  }

  thead {
    text-align: left;
  }

  tbody {
    tr {
      &:last-of-type {
        td {
          border-bottom: none;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 20px;

    caption {
      font-size: 18px;
      line-height: 1.33;
      height: 64px;
      padding: 20px;
    }
  }

  @media screen and (min-width: 1440px){
    width: 630px;
  }
`;

export const TH = styled.th`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  color: var(--placeholder-color);
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

  &:not(:first-of-type) {
    padding-left: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    padding: 20px 0;

    &:not(:first-of-type) {
      padding-left: 20px;
    }
  }
`;

export const NameColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 8px;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const ColumnContent = styled.td`
  font-size: 9px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;

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
