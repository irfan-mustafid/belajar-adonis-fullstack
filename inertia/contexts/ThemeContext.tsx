import { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: PropsWithChildren) {
  // Always start with light to match server render
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Only run on client after mount
    const stored = localStorage.getItem('theme') as Theme
    const initialTheme = stored === 'dark' ? 'dark' : 'light'
    setThemeState(initialTheme)
  }, [])

  const setTheme = (newTheme: Theme) => {
    console.log('Toggle theme from', theme, 'to', newTheme)
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)

    // Update DOM immediately
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)

    console.log('HTML classes:', document.documentElement.className)
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
