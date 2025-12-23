import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '~/contexts/ThemeContext'

interface HeaderProps {
  title?: string
  userName?: string
}

export default function Header({ title = 'Dashboard', userName = 'User' }: HeaderProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('Button clicked! Current theme:', theme, '-> New theme:', newTheme)
    setTheme(newTheme)
  }

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h1>

      <div className="flex items-center gap-3">
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        <Dropdown>
          <DropdownTrigger>
            <Avatar as="button" size="sm" name={userName} className="cursor-pointer" />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Menu">
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="logout" className="text-danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}
