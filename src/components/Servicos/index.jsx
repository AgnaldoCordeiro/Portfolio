import styles from "./styles.module.scss";

export function Servicos() {
  return (
    <section className={styles.services} id="servicos">
      <h2 className={styles.services__title}>Serviços</h2>
      <div className={styles.cards}>
        <div className={styles.card__services}>
          <img src="./code.png" alt="" />
          <h3 className={styles.card__title}>Criação de sites</h3>
        </div>
        <div className={styles.card__services}>
          <img src="./figma.png" alt="" />
          <h3 className={styles.card__title}>Ui Designer</h3>
        </div>
        <div className={styles.card__services}>
          <img src="./smartphone.png" alt="" />
          <h3 className={styles.card__title}>Sites responsivos</h3>
        </div>
      </div>
    </section>
  );
}
