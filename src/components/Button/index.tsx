import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ size = "md", children }) => {
  return <Container size={size}>{children}</Container>;
};
