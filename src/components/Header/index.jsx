import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
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
      <div>
        <form action="#">
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
            />

            <span className={styles.slider}></span>
          </label>
        </form>
      </div>
    </nav>
  );
}
