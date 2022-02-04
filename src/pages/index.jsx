import Head from "next/head";
import { Contato } from "../components/Contato";
import { Formulario } from "../components/Formulario";
import { Projetos } from "../components/Projetos";
import { Servicos } from "../components/Servicos";
import { Sobre } from "../components/Sobre";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio AgnaldoCordeiro</title>
      </Head>
      <main className={styles.container__main}>
        <section className={styles.hero}>
          <h1>
            Olá sou <br />
            <span>Agnaldo Cordeiro</span>
          </h1>
          <p>Desenvolvedor Front End</p>
          <button className={styles.btnDownload}>
            <a href="/src/Doc/CV_Agnaldo.pdf" download>
              Download Currículo
            </a>
          </button>
        </section>
        <img
          src="/perfil-site.jpg"
          alt="imagem perfil"
          className={styles.imgStyle}
        />
      </main>

      <Sobre />
      <Projetos />
      <Servicos />
      <Contato id="contact">
        <Formulario />
      </Contato>
    </>
  );
}
