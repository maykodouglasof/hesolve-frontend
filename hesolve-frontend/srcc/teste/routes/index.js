import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      {/* <Route path="/signup" element={SignUp} />
      <Route path="/forgot-password" element={ForgotPassword} />
      <Route path="/reset-password" element={ResetPassword} />

      <Route path="/dashboard" element={Dashboard} isPrivate />
      <Route path="/profile" element={Profile} /> */}
    </ReactRoutes>
  );
};

export default Routes;
