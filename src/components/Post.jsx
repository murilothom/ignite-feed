import styles from './Post.module.css'

import { Comment } from './Comment'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/murilothom.png"
          />
          <div className={styles.authorInfo}>
            <strong>Murilo Thom</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="8 de Setembro às 17:44" dateTime="2022-09-08 17:44:22">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>  
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}