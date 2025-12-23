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
    console.log(
      'ThemeProvider mounted. Stored theme:',
      stored,
      '-> Setting theme to:',
      initialTheme
    )
    setThemeState(initialTheme)

    // Also apply to DOM immediately
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(initialTheme)
    console.log('Applied theme to DOM:', document.documentElement.className)
  }, [])

  const setTheme = (newTheme: Theme) => {
    console.log('setTheme called. Current theme:', theme, '-> New theme:', newTheme)
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)

    // Update DOM immediately
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)

    console.log('HTML classes after toggle:', document.documentElement.className)
    console.log('Theme state will be:', newTheme)
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
