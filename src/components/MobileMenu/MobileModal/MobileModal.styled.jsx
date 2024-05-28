import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  background: var(--bg-backdrop);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
`;

export const ModalContainer = styled.div`
  background-color: white;
  max-width: 78px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 14px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    stroke: var(--main-black);
  }
`;
