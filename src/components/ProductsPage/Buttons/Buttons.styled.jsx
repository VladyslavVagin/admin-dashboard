import styled from "@emotion/styled";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
`;

export const ButtonEdit = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid var(--accent-color);
  background-color: transparent;
  transition: all var(--hover-effect);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const ButtonDelete = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid var(--expense-color);
  background-color: transparent;
  transition: all var(--hover-effect);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
