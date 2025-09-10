

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthWrapper />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
