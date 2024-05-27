import React from "react";
import Logo from "../../components/LoginPage/Logo/Logo";
import Title from "../../components/LoginPage/Title/Title";
import LoginForm from "../../components/LoginPage/LoginForm/LoginForm";
import { Container } from "../../components/Common/Container.styled";
import { FLexContainer } from "./Login.styled";

const Login = () => {
  return (
    <Container>
      <Logo />
      <FLexContainer>
        <Title />
        <LoginForm />
      </FLexContainer>
    </Container>
  );
};

export default Login;
