import styled from "@emotion/styled";

export const ButtonLogout = styled.button`
  background-color: var(--accent-color);
  border: none;
  outline: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--hover-effect);

  &:hover {
    background-color: var(--hover-accent);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
