import styled from "@emotion/styled";

export const ListStats = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  width: 156px;
  height: 98px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:first-of-type {
    border: 1px solid var(--accent-color);
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 8px;

    svg {
      fill: none;
      stroke: var(--main-black);
    }

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.17;
      color: var(--placeholder-color);
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
`;
