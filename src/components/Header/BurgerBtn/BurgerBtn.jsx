import React from 'react';
import sprite from "../../../assets/sprite.svg";
import { StyledBurgerBtn } from './BurgerBtn.styled';

const BurgerBtn = ({setIsShowMobileMenu}) => {

  const handleBurgerBtnClick = () => setIsShowMobileMenu(true);

  return (
    <StyledBurgerBtn type='button' onClick={handleBurgerBtnClick}>
        <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-burger`}></use>
        </svg>
    </StyledBurgerBtn>
  )
}

export default BurgerBtn;