import emailjs from "emailjs-com";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export function Formulario() {
  const [error, setError] = useState(""),
    [success, setSuccess] = useState("");

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
          setSuccess("Mensagem enviada com sucesso!");
          // alert("Mensagem enviada com sucesso! 👍");
        },
        (error) => {
          setError(error.message);
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
            <p>
              {success} {error}
            </p>
          </div>
        </form>
      </main>
    </>
  );
}
