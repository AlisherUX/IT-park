import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Root from "./components/root";
import UserProvider from "./context/userContext";
import "./assets/style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <Root />
    </UserProvider>
  </BrowserRouter>
);
