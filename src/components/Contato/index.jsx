import { Formulario } from "../Formulario";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Contato() {
  return (
    <>
      <main className={styles.contentContent} id="contact">
        <div className={styles.borderContent}>
          <h1 className={styles.titulo}>Contato</h1>
          <div className={styles.grid}>
            <section className={styles.sectionContato}>
              <h4>Diga oi!</h4>
              <p>
                Para qualquer informação, dúvida ou comentário, preencha o
                fomulário e deixe seu contato entrarei em contato com você em
                até 24 horas.
              </p>
              {<Formulario />}
            </section>
            <section className={styles.sectionContato}>
              <h4>Informações de Contato</h4>
              <p>Siga minhas redes sociais</p>
              <box className={styles.MidiaSocial}>
                <Link href="https://github.com/AgnaldoCordeiro">
                  <a target="_blank" rel="noreferrer">
                    <img src="/GitHub.svg" />
                  </a>
                </Link>
                <Link href="https://twitter.com/AgCordeiro_">
                  <a target="_blank" rel="noreferrer">
                    <img src="/Twitter.svg" />
                  </a>
                </Link>
                <Link href="mailto:agske13@gmail.com?Subject=Título%20da%20mensagem">
                  <a target="_blank" rel="noreferrer">
                    <img src="/gmail.svg" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/agnaldocordeiro/">
                  <a target="_blank" rel="noreferrer">
                    <img src="/icons8-linkedin.svg" />
                  </a>
                </Link>
              </box>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
