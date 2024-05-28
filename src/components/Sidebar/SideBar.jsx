import React from "react";
import NavMenu from "../MobileMenu/NavMenu/NavMenu";
import { Aside } from "./SideBar.styled";

const SideBar = () => {
  return (
    <Aside>
      <NavMenu />
    </Aside>
  );
};

export default SideBar;
