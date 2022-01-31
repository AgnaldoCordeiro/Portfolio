import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  function Copyright(props) {
    return (
      <p variant="body2" color="text.secondary" align="center" {...props}>
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/agnaldocordeiro/"
        >
          <a target="_blank" rel="noreferrer">
            Agnaldo Cordeiro
          </a>
        </Link>
        {" • Direitos Reservados "}
        {new Date().getFullYear()}
        {"."}
      </p>
    );
  }
  return (
    <footer className={styles.ContainerFooter}>
      <Copyright />
    </footer>
  );
}
