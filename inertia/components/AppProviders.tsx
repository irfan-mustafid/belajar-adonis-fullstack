import { PropsWithChildren } from 'react'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider, useTheme } from '~/contexts/ThemeContext'

function HeroUIWrapper({ children }: PropsWithChildren) {
  const { theme } = useTheme()

  return (
    <HeroUIProvider className="h-full w-full">
      <div className={theme}>{children}</div>
    </HeroUIProvider>
  )
}

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <HeroUIWrapper>{children}</HeroUIWrapper>
    </ThemeProvider>
  )
}
