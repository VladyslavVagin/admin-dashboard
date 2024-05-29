import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
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
  }
`;

export const NameColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
`;

export const ColumnContent = styled.td`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

    &:not(:first-of-type) {
        padding-left: 14px;
    }
`;
