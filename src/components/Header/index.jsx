import styles from "./styles.module.scss";

export function Header() {
  return (
    <nav className={styles.nav__bar}>
      <label className={styles.header__Title}>Portfólio</label>
      <ul className={styles.nav__ul}>
        <li>
          <a>Sobre Mim</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
        <li>
          <a>Serviços</a>
        </li>
        <li>
          <a>Minhas Skills</a>
        </li>
      </ul>
    </nav>
  );
}
