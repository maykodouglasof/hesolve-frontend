import React, { useState } from "react";
import { api } from "../services/api";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState({
    user: null,
    isAuthenticated: false,
    token: null,
  });
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadStoragedData = async () => {};

  React.useEffect(() => {
    loadStoragedData();
  }, []);

  const signIn = React.useCallback(async ({ email, password }) => {
    setLoadingAuth(true);

    await api
      .post("/auth/login", {
        email,
        password,
      })
      .then(async (response) => {
        const jsonValue = JSON.stringify(response.data);

        setData({
          user: response.data,
        });

        setLoadingAuth(false);
      })
      .catch((error) => {
        const { message } = error?.response?.data;

        setLoadingAuth(false);
      });
  }, []);

  const signUp = async ({
    first_name,
    last_name,
    email,
    username,
    password,
    phone,
  }) => {
    await api
      .post("/auth/create/", {
        first_name,
        last_name,
        email,
        username,
        password,
        phone,
      })
      .then((response) => {
        const { message } = response.data || "Erro ao cadastrar";
      })
      .catch((err) => {
        const { message } = err.response.data;
      });
  };

  const signOut = React.useCallback(async () => {
    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signUp,
        loading,
        loadingAuth,
        signOut,
        loadStoragedData,
        setLoadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
