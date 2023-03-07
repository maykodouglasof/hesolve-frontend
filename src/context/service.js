import React from "react";

import { api } from "../services/api";

export const ServiceContext = React.createContext();

export const ServiceProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const [servicesList, setServicesList] = React.useState([]);
  const [servicesListUser, setServicesListUser] = React.useState([]);

  const getServices = async () => {
    setLoading(true);
    await api
      .get("/service")
      .then((response) => {
        setServicesList(response?.data);
        setLoading(false);
      })
      .catch((err) => {});
  };

  return (
    <ServiceContext.Provider
      value={{
        getServices,
        servicesList,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService() {
  const context = React.useContext(ServiceContext);

  if (!context) {
    throw new Error("useService must be used within an AuthProvider");
  }

  return context;
}
