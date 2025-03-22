import { Inchworm } from './inchworm'
import styles from './navigation.module.scss'

export const Navigation = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className={styles['nav-wrapper']}>
      <h1>jooli</h1>
      <div className={styles['inchworm-container']}>
        <Inchworm />
      </div>
      <button 
        onClick={toggleTheme} 
        className={styles['theme-toggle']}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  )
}