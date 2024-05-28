import styled from "@emotion/styled";

export const ButtonLogout = styled.button`
  @media screen and (max-width: 1439.98px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    background-color: var(--accent-color);
    border: none;
    outline: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
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
  }
`;
