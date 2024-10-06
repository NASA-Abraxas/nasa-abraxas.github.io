import styles from './ColumnNav.module.css'
export const ColumnNav = () => {
  return (
    <nav className={styles['nav-container']}>
      <a href="/page2"><button>Title</button></a>
      <a href="/page4"><button>Chapter 1</button></a>
      <a href="/page8"><button>Chapter 2</button></a>
      <a href="/page10"><button>Chapter 3</button></a>
      <a href="/page14"><button>Quiz</button></a>
    </nav>
  )
}