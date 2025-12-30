import { PropsWithChildren } from 'react'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from '~/contexts/ThemeContext'

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeProvider>
  )
}
