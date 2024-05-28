// @ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from "../../../redux/auth/operations";
import sprite from '../../../assets/sprite.svg';
import { ButtonLogout } from './LogoutBtn.styled';

const LogoutBtn = () => {
    
 const dispatch = useDispatch();

 const onLogout = () => dispatch(logOut());

  return (
    <ButtonLogout type='button' onClick={onLogout}>
        <svg>
            <use xlinkHref={`${sprite}#icon-logout`}></use>
        </svg>
    </ButtonLogout>
  )
}

export default LogoutBtn