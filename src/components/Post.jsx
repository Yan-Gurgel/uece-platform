import styles from "./Post.module.css";

import yan from "../assets/yan-profile.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={yan}
          />
          <div className={styles.autorInfo}>
            <strong>Yan Gurgel</strong>
            <span>Aluno/Bolsista</span>
          </div>
        </div>

        <time title="12 de Outubro às 10:55h" dateTime="2022-10-12 10:55:20">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Bom dia Turma!</p>

        <p>
          Deixando o link com os arquivos da aula de hoje da Professora
          Gabrielle!
        </p>

        <p>
          <a href="">wwww.drive.com.br/link/material/aula05</a>
        </p>
      </div>
    </article>
  );
}
