import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

import { api } from "../../services/api";

import Header from "../../components/Header";

import { Container, Content } from "./styles";

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);

  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Faça algo com os valores do formulário aqui
  };

  return (
    <>
      <Header />
      <Container>
        {/* <Content>
          <Heading>Faça seu cadastro</Heading>

          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button loading={loading} type="submit">
            Cadastrar
          </Button>

          <Link to="/entrar">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </Content> */}

        <Box
          maxW="md"
          mx="auto"
          my={8}
          p={6}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="white"
        >
          <VStack spacing={4}>
            <Heading>Cadastro</Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleFormChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Cadastrar
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
