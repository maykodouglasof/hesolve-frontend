import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { Container, Content, AnimationContainer, Background } from "./styles";

const SignIn = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu login</h1>

              <Input
                name="email"
                icon={FiMail}
                type="text"
                placeholder="E-mail"
              />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />

              <Button loading={loading} type="submit">
                Entrar
              </Button>

              <Link to="/forgot-password">Esqueci minha senha</Link>
            </Form>

            <Link to="signup">
              <FiLogIn />
              Criar conta
            </Link>
          </AnimationContainer>
        </Content> */}

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
