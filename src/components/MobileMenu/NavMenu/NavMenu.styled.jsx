import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  margin-top: 92px;
`;

export const MenuItemLink = styled(NavLink)`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  border-radius: 50%;

  svg {
    fill: var(--icons-color);
  }

  &.active {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    svg {
        fill: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px){
    width: 44px;
    height: 44px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
