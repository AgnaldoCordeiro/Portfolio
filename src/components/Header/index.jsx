import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <nav className={styles.nav__bar}>
      <label className={styles.header__Title}>Portfólio</label>
      <ul className={styles.nav__ul}>
        <Link href="/.#sobre">
          <li>
            <a>Sobre</a>
          </li>
        </Link>
        <Link href="/.#projetos">
          <li>
            <a>Projetos</a>
          </li>
        </Link>
        <Link href="/.#servicos">
          <li>
            <a>Serviços</a>
          </li>
        </Link>
        <Link href="/.#contact">
          <li>
            <a>Contato</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
