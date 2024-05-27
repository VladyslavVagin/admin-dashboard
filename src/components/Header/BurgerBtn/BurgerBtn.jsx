import React from 'react';
import sprite from "../../../assets/sprite.svg";
import { StyledBurgerBtn } from './BurgerBtn.styled';

const BurgerBtn = () => {
  return (
    <StyledBurgerBtn type='button'>
        <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-burger`}></use>
        </svg>
    </StyledBurgerBtn>
  )
}

export default BurgerBtn;