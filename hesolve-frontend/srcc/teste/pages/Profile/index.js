import React, { useCallback, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { api } from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, AvatarInput } from "./styles";

const Profile = () => {
  const formRef = null;

  const [loading, setLoading] = useState(false);

  const { user } = [];

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        old_password: Yup.string(),
        password: Yup.string().when("old_password", {
          is: (val) => !!val.length,
          then: Yup.string().required("Campo obrigatório"),
          otherwise: Yup.string(),
        }),
        password_confirmation: Yup.string()
          .when("old_password", {
            is: (val) => !!val.length,
            then: Yup.string().required("Campo obrigatório"),
            otherwise: Yup.string(),
          })
          .oneOf([Yup.ref("password"), ""], "Confirmação incorreta"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);

      const { name, email, old_password, password, password_confirmation } =
        data;

      const formData = {
        name,
        email,
        ...(old_password
          ? {
              old_password,
              password,
              password_confirmation,
            }
          : {}),
      };

      const response = await api.put("/profile", formData);

      // updateUser(response.data);

      setLoading(false);
    } catch (err) {}
  }, []);

  const handleAvatarChange = useCallback((e) => {
    if (e.target.files) {
      const data = new FormData();

      data.append("avatar", e.target.files[0]);

      api.patch("/users/avatar", data).then((response) => {
        // updateUser(response.data);
      });
    }
  }, []);

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha atual"
          />

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
            placeholder="Confirmar senha"
          />

          <Button loading={loading} type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
