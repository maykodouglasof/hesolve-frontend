import React, { useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";
import { api } from "../../services/api";

const ResetPassword = () => {
  const formRef = null;

  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required("Nova senha obrigatória"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), "null"],
            "Confirmação incorreta"
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        const token = location.search.replace("?token=", "");

        if (!token) {
          throw new Error();
        }

        await api.post("/password/reset", {
          password,
          password_confirmation,
          token,
        });

        setLoading(true);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    },
    [location]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button loading={loading} type="submit">
              Alterar senha
            </Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
