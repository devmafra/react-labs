import React from "react";
import { InputField } from "../components/InputField";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Mínimo 6 caracteres"),
});

export function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    alert("Login realizado com sucesso!");

    reset();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-96 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          register={register}
          error={errors.email}
        />
        <InputField
          id="password"
          name="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          register={register}
          error={errors.password}
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
