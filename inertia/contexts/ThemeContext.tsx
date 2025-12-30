import { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: PropsWithChildren) {
  // Force light theme always for now to fix HeroUI issues
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Apply light theme to DOM
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add('light')
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)

    // Update DOM immediately
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return {
      theme: 'light' as Theme,
      setTheme: () => {},
    }
  }
  return context
}
