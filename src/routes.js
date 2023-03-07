import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </ReactRoutes>
  );
};

export default Routes;
