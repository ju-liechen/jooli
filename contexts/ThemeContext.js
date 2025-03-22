'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', !isDarkMode)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        setIsDarkMode(savedMode === 'true')
      }
    }
  }, [])
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}