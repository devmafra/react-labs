import { Controller, useForm } from "react-hook-form";
import "./App.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nomeCurso: yup
    .string()
    .required("O nome do curso é obrigatório")
    .min(3, "O nome deve conter pelo menos 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres"),
  date: yup
    .date("Formato de data inválido")
    .typeError("Insira uma data válida")
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "A data não pode ser no passado",
    )
    .required("A data de início é obrigatória"),
  categoria: yup
    .string()
    .required("Escolha uma categoria")
    .oneOf(
      ["programacao", "design", "marketing", "outros"],
      "Categoria inválida",
    ),
  descricao: yup
    .string()
    .required("A descrição do curso é obrigatória")
    .min(10, "O descrição deve conter pelo menos 10 caracteres")
    .max(70, "O descrição pode ter no máximo 70 caracteres"),
});

export default function App() {
  // useForm hook
  // Valores padrão
  // handleSubmit função que lida com o envio do formulário
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nomeCurso: "",
      date: "",
      categoria: "",
      descricao: "",
    },
    resolver: yupResolver(schema),
  });

  // Função para lidar com o envio do formulário
  // Aqui apenas logamos
  // Caso real seria enviar para um servidor
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="form-container">
      <h1>Cadastro de curso</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome do curso"
          {...register("nomeCurso")}
        />
        {errors.nomeCurso && (
          <span className="error">{errors.nomeCurso.message}</span>
        )}

        <Controller
          control={control}
          name="date"
          render={({ field }) => <input type="date" lang="pt-BR" {...field} />}
        />

        {errors.date && <span className="error">{errors.date.message}</span>}

        <Controller
          control={control}
          name="categoria"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Escolha a categoria...
              </option>
              <option value="programacao">Programação</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="outros">Outros</option>
            </select>
          )}
        />
        {errors.categoria && (
          <span className="error">{errors.categoria.message}</span>
        )}

        <Controller
          control={control}
          name="descricao"
          render={({ field }) => (
            <textarea placeholder="Descrição do curso" rows={4} {...field} />
          )}
        />
        {errors.descricao && (
          <span className="error">{errors.descricao.message}</span>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
