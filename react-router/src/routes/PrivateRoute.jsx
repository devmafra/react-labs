import React from "react";
import { Navigate } from "react-router";

export function PrivateRoute({ children }) {
  // Simulação login
  const isAuthenticated = localStorage.getItem("isAdmin") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
}
