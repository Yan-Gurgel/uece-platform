import styles from "./Post.module.css";

import yan from "../assets/yan-profile.png";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={yan}
          />
          <div className={styles.authorInfo}>
            <strong>Yan Gurgel</strong>
            <span>Aluno/Bolsista</span>
          </div>
        </div>

        <time title="12 de Outubro às 10:56h" dateTime="2022-10-12 10:55:20">
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

      <form className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>
        <textarea 
            placeholder="Escreva aqui o seu comentário"
        />
        <footer>
            <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commetList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
