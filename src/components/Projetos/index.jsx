import styles from "./styles.module.scss";

export function Projetos() {
  return (
    <div>
      <h2 className={styles.projects__title}>Projetos</h2>

      <section className={styles.Projetos} id="projetos">
        <div className={styles.box}>
          <div className={styles.box__projects}>
            <iframe
              src="https://giphy.com/embed/9nZUBIXJrDzDBkrC1q"
              frameBorder="0"
              className={styles.giphyEmbed}
              allowFullScreen
            ></iframe>

            <h3 className={styles.box__title}>PEB Engenharia</h3>
            <p className={styles.box__description}>
              Tecnologias: NextJS, SCSS, EmailJs.
            </p>
          </div>
          <div className={styles.box__projects}>
            <iframe
              src="https://giphy.com/embed/ne4it5Y87OkDSu8kYB"
              frameBorder="0"
              className={styles.giphyEmbed}
              allowFullScreen
            ></iframe>
            <h3 className={styles.box__title}>Web Radio</h3>
            <p className={styles.box__description}>
              Tecnologias: NextJS, Scss, TypeScript, Prismic, Stripe.
            </p>
          </div>
          <div className={styles.box__projects}>
            <iframe
              src="https://giphy.com/embed/5E4Kt5WO96D3irPD5y"
              frameBorder="0"
              className={styles.giphyEmbed}
              allowFullScreen
            ></iframe>

            <h3 className={styles.box__title}>Mapa Covid-19</h3>
            <p className={styles.box__description}>
              Tecnologias: NextJS, Material-UI e TypeScript.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
