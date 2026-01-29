import React from "react";
import "./Table.css";

export function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Categoria</th>
          <th>Nível</th>
          <th>Preço</th>
          <th>Classificação</th>
          <th>Alunos</th>
          <th>Professor</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={`${item.id} - ${item.title}`}>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.level}</td>
            <td>R$ {item.price}</td>
            <td>{item.rating}</td>
            <td>{item.students}</td>
            <td>{item.instructor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
