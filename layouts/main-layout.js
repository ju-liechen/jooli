'use client'

import { useTheme } from 'contexts/ThemeContext'
import { Navigation } from 'components/navigation'

import styles from './main-layout.module.scss'


export default function MainLayout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme()
  
  return (
    <div className={`${styles['main-container']} ${isDarkMode ? styles['dark'] : styles['light']}`}>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>{children}</main>
    </div>
  )
}