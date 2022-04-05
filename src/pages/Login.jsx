import React from "react";
import FormLogin from "../components/Forms/FormLogin";
import { Container, ContainerLogin, Title } from "../assets/styles/login/login";
import { TitleLogoColor } from "../assets/styles/home/home";

const Login = () => {
  return (
    <Container>
      <ContainerLogin>
        <TitleLogoColor>Internet Banking</TitleLogoColor>
        <Title>LOGIN</Title>
        <FormLogin />
      </ContainerLogin>
    </Container>
  )
}

export default Login;