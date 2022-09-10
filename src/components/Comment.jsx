import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/murilothom.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Murilo Thom</strong>
              <time title="8 de Setembro às 17:44" dateTime="2022-09-08 17:44:22">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Murilo, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}