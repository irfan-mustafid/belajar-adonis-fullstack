import { PropsWithChildren } from 'react'

export default function GuestLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
