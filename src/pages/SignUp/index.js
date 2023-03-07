import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input, Button, Heading } from "@chakra-ui/react";

import { api } from "../../services/api";

import Header from "../../components/Header";

import { Container, Content } from "./styles";

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Heading>Faça seu cadastro</Heading>

          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button loading={loading} type="submit">
            Cadastrar
          </Button>

          <Link to="/signin">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
