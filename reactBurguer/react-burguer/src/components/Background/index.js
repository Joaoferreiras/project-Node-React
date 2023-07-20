import React from "react";
import { Container as Background } from "../Background/style";

const Container = ({ children }) => {
  return <Background>{children}</Background>;
};

export default Container;
