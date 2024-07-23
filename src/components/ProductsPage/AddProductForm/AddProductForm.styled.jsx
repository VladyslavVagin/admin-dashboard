import styled from "@emotion/styled";

export const TitleForm = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--main-black);
  margin-top: 26px;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;

  label {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 60px;
  border: 1px solid var(--border-color);
  outline: none;
  padding: 13px 18px;

  &::placeholder {
    color: var(--placeholder-color);
    font-size: 12px;
    font-weight: 400;
  }

  &:focus-within {
    border-color: var(--accent-color);
  }
`;

export const InvisibleInput = styled.input`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
`;

export const ErrorText = styled.p`
  height: 10px;
  color: var(--expense-color);
  font-size: 8px;
  font-weight: 300;
  text-align: right;
`;
