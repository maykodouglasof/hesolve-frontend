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

import Header from "../components/Header";

const SignIn = React.memo(() => {
  const [loading, setLoading] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const dataObj = {
        email: data.email.toLowerCase(),
        password: data.password,
      };
      const { email, password } = dataObj;

      //await signIn({ email, password });
    } catch (error) {
      //setLoadingAuth(false);
    }
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
          <Heading>Entre com sua conta</Heading>
          <FormLabel>Email</FormLabel>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email é obrigatório",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder={"Seu email"}
                type="email"
              />
            )}
          />

          <FormLabel>Sua Senha</FormLabel>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Senha é obrigatória",
            }}
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

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={loading}
            loadingText="Entrando"
            onClick={handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </VStack>
      </Box>
    </>
  );
});

export default SignIn;
