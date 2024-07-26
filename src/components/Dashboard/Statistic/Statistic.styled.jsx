import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ListStats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 24px 0;

  @media screen and (min-width: 375px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media screen and (min-width: 768px){
    margin: 20px 0;
  }

  @media screen and (min-width: 1440px){
    margin: 20px 0 40px 0;
  }
`;

export const ListItem = styled(Link)`
  width: 156px;
  height: 98px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  transition: border var(--hover-effect);

  &:hover, &:focus {
    border: 1px solid var(--accent-color);
  }

  span {
    color: var(--main-black);
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

  @media screen and (min-width: 768px){
    width: 221px;
    height: 108px;
    padding: 14px 18px;

    div {
      svg {
        width: 20px;
        height: 20px;
      }

      p {
        line-height: 1.5;
      }
    }

    span {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 1440px){
    width: 240px;
  }
`;
