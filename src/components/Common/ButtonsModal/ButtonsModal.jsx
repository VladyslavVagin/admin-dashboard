import React from "react";
import {
  ButtonCancel,
  ButtonConfirm,
  FlexContainer,
} from "./ButtonsModal.styled";

const ButtonsModal = ({ title, cancelAction }) => {
  return (
    <FlexContainer>
      <ButtonConfirm type="submit">{title}</ButtonConfirm>
      <ButtonCancel type="button" onClick={() => cancelAction(false)}>
        Cancel
      </ButtonCancel>
    </FlexContainer>
  );
};

export default ButtonsModal;
