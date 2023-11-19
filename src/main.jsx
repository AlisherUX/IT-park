import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/style/main.scss";
import UserProvider from "./context/userContext";
import CheckUser from "./pages/check";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CheckUser />
    </UserProvider>
  </BrowserRouter>
);
