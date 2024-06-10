// @ts-nocheck
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import sprite from "../../../assets/sprite.svg";
import { Backdrop, CloseButton, ModalContainer } from "./Modal.styled";

const Modal = ({ children, fn }) => {
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef?.current) {
      fn && fn(false);
    }
  };

  const handleCloseButtonClick = () => fn(false);

  return (
    <>
      {createPortal(
        <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
          <ModalContainer>
            <CloseButton type="button" onClick={handleCloseButtonClick}>
              <svg>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </CloseButton>
            {children}
          </ModalContainer>
        </Backdrop>,
        modalRoot
      )}
    </>
  );
};

export default Modal;
