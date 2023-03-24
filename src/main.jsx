import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import QuizContextProvider from "./contexts/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
