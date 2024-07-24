import styled from "@emotion/styled";

export const AddProductContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: flex-start;
  margin-bottom: 20px;

  button {
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: var(--accent-color);
    color: var(--white-color);
    min-width: 42px;
    max-width: 42px;
    max-height: 42px;
    min-height: 42px;

    svg {
      stroke: #fff;
      transform: rotate(45deg);
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: var(--main-black);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;

    button {
      min-width: 44px;
      max-width: 44px;
      max-height: 44px;
      min-height: 44px;
      transition: background-color var(--hover-effect);

      &:hover,
      &:focus {
        background-color: var(--hover-accent);
      }
    }
  }
`;
