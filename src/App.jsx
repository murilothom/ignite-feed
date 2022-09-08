import { Header } from "./components/Header"
import { Post } from './Post'

import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Murilo Thom'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          />
          <Post
            author='Diego Fernandes'
            content='Assumenda odio aliquam adipisicing elit.'
          />
        </main>
      </div>
    </div>
  )
}
