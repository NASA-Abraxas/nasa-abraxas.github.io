import { ColumnNav } from "./ColumnNav"
import styles from './ColumnNavContainer.module.css'

export const ColumnNavContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-container" style={{ display: 'flex' }}>
      <div className={styles["content-container"]}>
        {children}
      </div>

      <img src="burger-menu.svg" alt="burger-menu" className={styles["hamburger-container"]} />

      <div className={styles["column-nav-container"]}>
        <ColumnNav />
      </div>
    </div>
  )
}