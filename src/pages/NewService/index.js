import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../context/auth";
import { useForm, Controller } from "react-hook-form";
import { RuleEmail, RulePassword, RuleUsername } from "../../utils/rules";

import Header from "../../components/Header";

import { Container } from "./styles";

const NewService = React.memo(() => {
  const { signUp } = useAuth();

  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const objData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email.toLowerCase(),
      username: data.username.toLowerCase(),
      password: data.password,
      phone: data.phone,
    };

    await signUp(objData);

    setLoading(false);
  };

  return (
    <>
      <Header />
      <Container>
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

            <FormLabel>Seu Primeiro Nome</FormLabel>
            <Controller
              control={control}
              name="first_name"
              rules={{
                required: "Nome é obrigatório",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Primeiro Nome"}
                />
              )}
            />
            <FormLabel>Seu Sobrenome</FormLabel>
            <Controller
              control={control}
              name="last_name"
              rules={{
                required: "Sobrenome é obrigatório",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Sobrenome"}
                />
              )}
            />

            <FormLabel>Seu Email</FormLabel>
            <Controller
              control={control}
              name="email"
              rules={RuleEmail}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Email"}
                />
              )}
            />

            <FormLabel>Seu Telefone</FormLabel>
            <Controller
              control={control}
              name="phone"
              rules={{
                required: "Nome é obrigatório",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Telefone"}
                />
              )}
            />

            <FormLabel>Seu Usuário</FormLabel>
            <Controller
              control={control}
              name="username"
              rules={RuleUsername}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Usuário"}
                />
              )}
            />

            <FormLabel>Sua Senha</FormLabel>
            <Controller
              control={control}
              name="password"
              rules={RulePassword}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Sua senha"}
                />
              )}
            />

            <Button type="submit" colorScheme="blue">
              Cadastrar
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  );
});

export default NewService;
