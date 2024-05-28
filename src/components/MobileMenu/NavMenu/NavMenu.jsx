import React from "react";
import sprite from "../../../assets/sprite.svg";
import { menuInfo } from "../../../lib/menu";
import { List, MenuItemLink } from "./NavMenu.styled";

const NavMenu = () => {
  return (
    <List>
      {menuInfo?.map((item, index) => (
        <li key={index}>
          <MenuItemLink to={item.to}>
            <svg width={14} height={14}>
              <use xlinkHref={`${sprite}#${item.icon}`} />
            </svg>
          </MenuItemLink>
        </li>
      ))}
    </List>
  );
};

export default NavMenu;
