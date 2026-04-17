import React from "react";
import { InputField } from "../components/InputField";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          id="name"
          name="name"
          label="Nome"
          type="text"
          autoComplete="username"
          register={() => {}}
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          register={() => {}}
        />
        <InputField
          id="password"
          name="password"
          label="Senha"
          type="password"
          autoComplete="new-password"
          register={() => {}}
        />
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar Senha"
          type="password"
          autoComplete="new-password"
          register={() => {}}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Registrar
        </button>
        <p className="mt-4 text-center text-sm">
          Já possui conta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}
