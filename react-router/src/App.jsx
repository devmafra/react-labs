import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
    </>
  );
}
