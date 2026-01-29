import React from "react";
import "./OrderCard.css";
import { FaClipboardList } from "react-icons/fa";
import { OrderList } from "./OrderList";

export function OrderCard() {
  return (
    <div className="order-card">
      <h2 className="title">
        <FaClipboardList className="icon" />
        Pedidos do dia
      </h2>
      <OrderList />
    </div>
  );
}
