import emailjs from "emailjs-com";
import React from "react";
import styles from "./styles.module.scss";

export function Formulario() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_USER
      )

      .then(
        (result) => {
          alert("Mensagem enviada com sucesso! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={sendEmail}>
          <div className={styles.inputField}>
            <input type="text" name="name" placeholder="Nome" />
          </div>
          <div className={styles.inputField}>
            <input type="tel" name="tel" placeholder="Telefone" />
          </div>
          <div className={styles.inputField}>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className={styles.inputField}>
            <textarea
              name="mensagem"
              rows="3"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <div className={styles.buttonSubmit}>
            <button
              type="submit"
              className="btn btn-primary"
              value="Enviar mensagem"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
