import React from "react";
import { InputField } from "../components/InputField";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
          autoComplete="current-password"
          register={() => {}}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>
        <p className="mt-4 text-center text-sm">
          Não possui conta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
