import React, { useState } from "react";

export function CoursesList() {
  let courses = ["Html", "Javascript", "Python", "React"];

  const [listCourses, setListCourses] = useState(courses);
  const [filterText, setFilterText] = useState("");
  const [isFiltered, setIsfiltered] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);

  const applyFilter = () => {
    if (filterText.trim() === "") {
      setEmptyWarning(true);
      return;
    }

    const filtered = listCourses.filter((course) =>
      course.toLowerCase().includes(filterText.toLowerCase()),
    );

    setListCourses(filtered);
    setIsfiltered(true);
  };

  const resetFilter = () => {
    setListCourses(courses);
    setFilterText("");
    setIsfiltered(false);
  };

  return (
    <div>
      <h2>Lista do Cursos de Programação</h2>
      {listCourses.length > 0 ? (
        <ul>
          {listCourses.map((course, index) => (
            <li key={`${index}-${course}`}>{course}</li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Curso não encontrado!</p>
          <button onClick={resetFilter}>Voltar</button>
        </div>
      )}

      {!isFiltered && (
        <>
          <input
            type="text"
            placeholder="Digite o curso para filtrar"
            onChange={(e) => {
              setFilterText(e.target.value);
              setEmptyWarning(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyFilter();
            }}
          />
          <button onClick={applyFilter}>Filtrar</button>
          {emptyWarning && (
            <p style={{ color: "red" }}>Preencha o campo acima!</p>
          )}
        </>
      )}

      {isFiltered && listCourses.length > 0 && (
        <button onClick={resetFilter}>Voltar</button>
      )}
    </div>
  );
}
