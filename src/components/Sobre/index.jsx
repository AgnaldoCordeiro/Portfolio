import styles from "./styles.module.scss";

export function Sobre() {
  const ano_atual = new Date().getFullYear();
  const nascimento = "01/11/1994";
  // const mesAtual = new Date().getMonth() + 1;
  const idade = ano_atual - nascimento.split("/")[2];

  return (
    <section className={styles.container__sectionSobre} id="sobre">
      <div>
        <h2>Sobre Mim</h2>
        <p>
          Tenho {idade - 1} anos, sou de Araraquara/SP. <br />
          Formado em Analise e Desenvolvimento de Sistemas pela Universidade
          Paulista - UNIP. <br /> Sou entusiasta das melhores tecnologias de
          desenvolvimento web.
        </p>
        <p>
          Apaixonado por Tecnologia, busco estar sempre por dentro das inovações
          que revolucionam o mundo.
        </p>

        <h3>Tecnologias</h3>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          width="80"
          height="80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          width="80"
          height="80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
          width="80"
          height="80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          width="80"
          height="80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          width="80"
          height="80"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          width="80"
          height="80"
        />
      </div>
    </section>
  );
}
