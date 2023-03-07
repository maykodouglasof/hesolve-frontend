import React from "react";

import { AuthProvider } from "./auth";
import { ServiceProvider } from "./service";

export function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ServiceProvider>{children}</ServiceProvider>
    </AuthProvider>
  );
}

export default AppProvider;
