import { Button } from '@heroui/react'
import { Menu, Home, Users, Settings, ChevronDown, LogOut } from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  openUsers: boolean
  onToggleUsers: () => void
}

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  openUsers,
  onToggleUsers,
}: SidebarProps) {
  return (
    <aside
      className={`
        ${collapsed ? 'w-20' : 'w-64'}
        bg-linear-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950
        border-r border-gray-200 dark:border-gray-800
        transition-all duration-300
        flex flex-col
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && <span className="font-semibold">Admin Panel</span>}
        <Button isIconOnly size="sm" variant="light" onPress={onToggleCollapse}>
          <Menu size={18} />
        </Button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        <MenuItem icon={<Home size={18} />} label="Dashboard" collapsed={collapsed} active />

        {/* Users with submenu */}
        <div>
          <button
            onClick={onToggleUsers}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <Users size={18} />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">Users</span>
                <ChevronDown size={16} className={`transition ${openUsers ? 'rotate-180' : ''}`} />
              </>
            )}
          </button>

          {!collapsed && openUsers && (
            <div className="ml-9 mt-1 space-y-1">
              <SubMenuItem label="User List" />
              <SubMenuItem label="Roles" />
            </div>
          )}
        </div>

        <MenuItem icon={<Settings size={18} />} label="Settings" collapsed={collapsed} />
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-3">
        <MenuItem icon={<LogOut size={18} />} label="Logout" collapsed={collapsed} />
      </div>
    </aside>
  )
}

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  collapsed: boolean
  active?: boolean
  onClick?: () => void
}

export function MenuItem({ icon, label, collapsed, active = false, onClick }: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
        ${active ? 'bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'}
      `}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  )
}

interface SubMenuItemProps {
  label: string
  onClick?: () => void
}

export function SubMenuItem({ label, onClick }: SubMenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-1.5 rounded-md text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
    >
      {label}
    </div>
  )
}
