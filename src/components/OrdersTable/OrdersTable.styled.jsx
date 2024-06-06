import styled from "@emotion/styled";

export const Table = styled.table`
  width: 671px;
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

  @media screen and (min-width: 1440px) {
    width: 630px;
  }
`;
