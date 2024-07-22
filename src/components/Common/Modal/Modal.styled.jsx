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
  background-color: var(--white-color);
  max-width: 335px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 14px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 8px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    min-width: 24px;
    width: 24px;
    min-height: 24px;
    height: 24px;
    stroke: var(--main-black);
  }
`;