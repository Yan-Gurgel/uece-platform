import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/9919?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Aluno</strong>
              <time title="12 de Outubro às 10:55h" dateTime="2022-10-12 10:55:20">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Aula excelente, parabéns!! 👏👏 Até a próxima semana!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Gostei! <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
