import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/style/main.scss";
import UserProvider from "./context/userContext";
import Root from "./components/root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <Root />
    </UserProvider>
  </BrowserRouter>
);
