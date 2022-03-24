import React from "react";
import FormLogin from "../components/Forms/FormLogin";
import logo from '../assets/img/login/icone-de-dinheiro.png';
import '../assets/styles/login/login.css';
import { Container, ContainerLogin, Title, Logo } from "../assets/styles/login/login";

const Login = () => {
  return (
    <Container>
      <ContainerLogin>
        <Logo src={logo} />
        <Title>LOGIN</Title>
        <FormLogin />
      </ContainerLogin>
    </Container>
  )
}

export default Login;