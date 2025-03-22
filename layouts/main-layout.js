'use client'

import { useTheme } from 'contexts/ThemeContext'
import styles from './main-layout.module.scss'


export default function MainLayout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme()
  
  return (
    <div className={`${styles['main-container']} ${isDarkMode ? styles['dark'] : styles['light']}`}>
      <header className={styles['header']}>
        <h1>Welcome</h1>
        <button 
          onClick={toggleTheme} 
          className={styles['theme-toggle']}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </header>
      <main>{children}</main>
    </div>
  )
}