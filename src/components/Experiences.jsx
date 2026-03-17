import React from "react";

export default function Experiencias() {
  const experiencias = [
    {
      empresa: "Projeto Acadêmico - COTEMIG",
      cargo: "Desenvolvedor",
      periodo: "2023 - 2024",
      descricao:
        "Desenvolvimento de aplicações web utilizando JavaScript e React."
    },
    {
      empresa: "Projeto Faculdade",
      cargo: "Desenvolvedor Fullstack",
      periodo: "2024 - Atual",
      descricao:
        "Criação de sistemas com integração de frontend e backend."
    }
  ];

  return (
    <section className="exp-container">
      <h2>Experiências</h2>

      {experiencias.map((exp, index) => (
        <div key={index} className="exp-card">
          <h3>{exp.empresa}</h3>
          <p className="exp-info">
            <strong>{exp.cargo}</strong> | {exp.periodo}
          </p>
          <p>{exp.descricao}</p>
        </div>
      ))}
    </section>
  );
}