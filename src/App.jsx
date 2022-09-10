import './global.css'

import styles from './App.module.css'

import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/murilothom.png',
      name: 'Murilo Thom',
      role: 'Desenvolvedor Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },        
    ],
    publishedAt: new Date('2022-09-08 18:24:33')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },        
    ],
    publishedAt: new Date('2022-09-10 09:35:55')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
