import React from "react";
import { useTranslation } from 'react-i18next';

export default function Experiencias() {
  const { t } = useTranslation();
  const experiencias = t("experiencias.lista", { returnObjects: true });

  return (
    <section className="exp-container" id="experiencias">
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