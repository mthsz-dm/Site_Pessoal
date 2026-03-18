import React from "react";
import { useTranslation } from 'react-i18next';

export default function Contato() {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const mensagem = e.target.mensagem.value;

    const mailtoLink = `mailto:matheusdiasmendespop@gmail.com?subject=Contato de ${nome}&body=${mensagem} (${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contato-container">
      <h2>{t("contato")}</h2>

      <div className="contato-links">
        <a href="https://www.linkedin.com/in/matheus-dias-mendes-ba8a30234/">💼 LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit} className="contato-form">
        <input type="text" name="nome" placeholder={t("seu_nome")} required />
        <input type="email" name="email" placeholder={t("seu_email")} required />
        <textarea name="mensagem" placeholder={t("seu_mensagem")} required />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}