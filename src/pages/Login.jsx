import React from "react";
import FormLogin from "../components/Forms/FormLogin";
import logo from '../assets/img/logo.png';
import '../assets/styles/login/login.css';
import { Container, ContainerLogin, Title, Logo } from "../assets/styles/login/login";
import { TitleLogoColor } from "../assets/styles/home/home";

const Login = () => {
  return (
    <Container>
      <ContainerLogin>
        {/* <Logo src={logo} /> */}
        <TitleLogoColor>Internet Banking</TitleLogoColor>
        <Title>LOGIN</Title>
        <FormLogin />
      </ContainerLogin>
    </Container>
  )
}

export default Login;