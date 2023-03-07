import React from "react";
import { api } from "../services/api";

import { useAuth } from "./auth";

type ServiceProviderProps = {
  children: React.ReactNode;
};

interface ServiceContextData {
  servicesList: any;
  loading: boolean;
  getServices: () => Promise<void>;
  getServicesByUser: () => Promise<void>;
  servicesListUser: any;
  getServicesFilter: (filter: any) => Promise<void>;
  city: any;
  setCity: (city: any) => void;
}

const ServiceContext = React.createContext({} as ServiceContextData);

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const { user } = useAuth();

  const [servicesList, setServicesList] = React.useState([]);
  const [servicesListUser, setServicesListUser] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [city, setCity] = React.useState(null);

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

  const getServicesFilter = async (values) => {
    setLoading(true);

    if (
      values.keyword === "" &&
      values.category_id === 0 &&
      values.latitude === ""
    ) {
      setLoading(false);
      await getServices();
      navigate("Home", {
        filter: false,
      });
      return;
    }

    await api
      .post("/search/searchService", {
        keyword: values?.keyword,
        sortBy: values?.sortBy,
        category_id: values.category_id?.id,
        longitude: values?.longitude,
        latitude: values?.latitude,
      })
      .then((response) => {
        let services = response?.data;

        if (values?.sortBy === 1) {
          services = services.sort((a, b) => {
            return a.avgRating - b.avgRating;
          });
        }

        setServicesList(services);

        navigate("Home", {
          filter: true,
        });
        setLoading(false);
      })
      .catch((err) => {});
  };

  const getServicesByUser = async () => {
    await api
      .post("/service/listByUser", {
        user_id: user?.id,
      })
      .then((response) => {
        setServicesListUser(response?.data);
      })
      .catch((error) => {});
  };

  return (
    <ServiceContext.Provider
      value={{
        servicesList,
        getServicesByUser,
        getServices,
        servicesListUser,
        getServicesFilter,
        loading,
        city,
        setCity,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService(): ServiceContextData {
  const context = React.useContext(ServiceContext);

  if (!context) {
    throw new Error("useService must be used within an ServiceProvider");
  }

  return context;
}
