import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMail } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";
import { api } from "../../services/api";

const ForgotPassword = () => {
  const formRef = null;

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    try {
      setLoading(true);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post("/password/forgot", {
        email: data.email,
      });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>

            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />

            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
