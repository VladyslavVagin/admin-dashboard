import React from "react";
import styled from "@emotion/styled";
import sprite from "../../../../../assets/sprite.svg";

const Icon = styled.svg`
  fill: none;
  stroke: var(--accent-color);
  transition: var(--hover-effect);

  &:hover,
  &:focus {
    stroke: var(--hover-accent);
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const IconCalendar = () => {
  return (
    <Icon width={18} height={18}>
      <use xlinkHref={`${sprite}#icon-calendar`}></use>
    </Icon>
  );
};

export default IconCalendar;