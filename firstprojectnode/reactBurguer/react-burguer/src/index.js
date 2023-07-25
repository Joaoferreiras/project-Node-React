import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyles";
import MyRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyRoutes />
    <GlobalStyle />
  </>
);
