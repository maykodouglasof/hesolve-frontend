import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  VStack,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useAuth } from "../context/auth";
import { useForm, Controller } from "react-hook-form";
import { RuleEmail, RulePassword, RuleUsername } from "../utils/rules";

import Header from "../components/Header";

const SignUp = React.memo(() => {
  const { signUp } = useAuth();

  const [loading, setLoading] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
      <Box
        maxW="md"
        mx="auto"
        my={8}
        p={10}
        borderWidth={1}
        borderRadius={10}
        boxShadow="lg"
        bg="white"
      >
        <VStack spacing={4}>
          <Heading>Criar seu cadastro</Heading>

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
                type="text"
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
                type="text"
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
                type="email"
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
              <InputGroup>
                <InputLeftAddon children="+55" />

                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Seu Telefone"}
                  type="tel"
                />
              </InputGroup>
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
              <InputGroup>
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder={"Sua senha"}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button onClick={handleClick}>
                    {show ? "Ocultar" : "Mostrar"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            )}
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
        </VStack>
      </Box>
    </>
  );
});

export default SignUp;
