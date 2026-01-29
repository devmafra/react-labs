import React from "react";
import "./index.css";
import { OrderCard } from "./components/OrderCard";

export function App() {
  return (
    <div className="container">
      {/* Primeiro componente */}
      <OrderCard />
    </div>
  );
}
