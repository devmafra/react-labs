import React from "react";
import { Button } from "./Button";
import { FaEdit } from "react-icons/fa";

export function OrderAction({ onEdit }) {
  return (
    <>
      {/* Componente 5 button */}
      <Button onClick={onEdit}>
        <FaEdit />
        Editar
      </Button>
    </>
  );
}
