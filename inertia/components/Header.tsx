import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  User,
} from '@heroui/react'
import { Moon, Sun, LogOut } from 'lucide-react'
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

        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-end" className="bg-slate-900 rounded-md">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="logout"
                color="success"
                startContent={<LogOut size={18} />}
                href="/logout"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
