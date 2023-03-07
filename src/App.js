import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "./context";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
