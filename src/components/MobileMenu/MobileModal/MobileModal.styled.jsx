import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
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
  right: 0;
  height: 100%;
  padding: 40px 20px;
`;