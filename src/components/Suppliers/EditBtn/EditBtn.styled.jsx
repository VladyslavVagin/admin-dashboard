import styled from "@emotion/styled";

export const BtnStyled = styled.button`
  width: 82px;
  height: 34px;
  outline: none;
  border: 1px solid rgba(89, 177, 122, 0.5);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  color: var(--accent-color);
  transition: all var(--hover-effect);

  &:hover, &:focus {
    transform: scale(1.1);
  }
`;
