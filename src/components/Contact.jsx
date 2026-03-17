import React from "react";

export default function Contato() {
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
      <h2>Contato</h2>

      <div className="contato-links">
        <a href="https://www.linkedin.com/in/matheus-dias-mendes-ba8a30234/">💼 LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit} className="contato-form">
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu email" required />
        <textarea name="mensagem" placeholder="Sua mensagem" required />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}