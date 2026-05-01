import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
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
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (user) {
      setMessage("");
      alert("Login realizado com sucesso");
      navigate("/");
    } else {
      navigate("/register", {
        state: { message: "Crie uma conta para continuar" },
      });
    }
    reset();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-96 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {message && <p className="text-red-500">{message}</p>}

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
