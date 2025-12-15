import { PropsWithChildren } from 'react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
