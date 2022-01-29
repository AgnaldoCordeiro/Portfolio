import styles from "./styles.module.scss";

export function Projetos() {
  return (
    <section className={styles.Projetos} id="projetos">
      <h2 className={styles.projects__title}>Projetos</h2>
      <div className={styles.box}>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
        <div className={styles.box__projects}>
          <img src="./src/img/Rectangle 19.svg" alt="" />
          <h3 className={styles.box__title}>Título do Projeto</h3>
          <p className={styles.box__description}>
            Tecnologias: HTML, CSS e JS.
          </p>
        </div>
      </div>
    </section>
  );
}
