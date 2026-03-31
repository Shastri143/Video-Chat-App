import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./SocketContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);