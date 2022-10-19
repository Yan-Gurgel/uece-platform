import styles from "./Header.module.css";

import brasaoUece from '../assets/brasao-uece.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={brasaoUece} alt="Brasão da UECE" />
      <strong>PLATAFORMA DE ESTUDOS DA UECE</strong>
      <img src={brasaoUece} alt="Brasão da UECE" />
    </header>
  );
}
