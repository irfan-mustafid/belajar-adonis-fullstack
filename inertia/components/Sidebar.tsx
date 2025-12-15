import { Link } from '@inertiajs/react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-8">MyApp</h2>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block px-4 py-2 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/users" className="block px-4 py-2 rounded hover:bg-gray-700">
                Users
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
