import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import ProfileVerified from "./pages/ProfileVerified";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/perfil-verificado" element={<ProfileVerified />} />
    </ReactRoutes>
  );
};

export default Routes;
