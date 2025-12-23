interface StatCardProps {
  title: string
  value: string | number
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-xl p-5 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 shadow">
      <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  )
}
