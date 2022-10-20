import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/9919?v=4" />

      <div className={styles.commnetBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yan Gurgel</strong>
              <time
                title="12 de Outubro às 10:55h"
                dateTime="2022-10-12 10:55:20"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Comentario do usuário</p>
        </div>
      </div>
      <footer>
        <ThumbsUp />
        Aplaudir <span>20</span>
      </footer>
    </div>
  );
}
