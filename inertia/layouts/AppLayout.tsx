import { PropsWithChildren, useState } from 'react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

interface AppLayoutProps extends PropsWithChildren {
  title?: string
  userName?: string
}

export default function AppLayout({ children, title, userName }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [openUsers, setOpenUsers] = useState(true)

  return (
    <div className="h-screen w-screen flex bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        openUsers={openUsers}
        onToggleUsers={() => setOpenUsers(!openUsers)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title={title} userName={userName} />

        <main className="flex-1 overflow-auto p-6 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
          {children}
        </main>
      </div>
    </div>
  )
}
