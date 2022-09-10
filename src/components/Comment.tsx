import React, { useState } from 'react'

import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

interface CommentProps {
  content: string,
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment ({ content, onDeleteComment }: CommentProps) {  
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment () {
    setLikeCount(likeCount + 1)
  }

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
              <time
                title="8 de Setembro às 17:44" 
                dateTime="2022-09-08 17:44:22">Cerca de 1h atrás
              </time>
            </div>

            <button
              title='Deletar comentário'
              onClick={() => onDeleteComment(content)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}