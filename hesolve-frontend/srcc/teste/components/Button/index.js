import React from "react";

import Spinner from "../Spinner";

import { Container } from "./styles";

const Button = ({ loading, children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {loading ? <Spinner /> : children}
    </Container>
  );
};

export default Button;
