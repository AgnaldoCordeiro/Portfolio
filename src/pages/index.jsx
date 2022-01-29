import Head from "next/head";
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
            <span>AgnaldoCordeiro</span>
          </h1>
          <p>Dev Front End</p>
        </section>
        <img src="/perfil-site.jpg" alt="imagem perfil" />
      </main>

      <Sobre />
      <Projetos />
      <Servicos />
    </>
  );
}
