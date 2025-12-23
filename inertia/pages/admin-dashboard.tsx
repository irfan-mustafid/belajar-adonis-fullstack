import AppLayout from '~/layouts/AppLayout'
import StatCard from '~/components/StatCard'

export default function AdminDashboard() {
  return (
    <AppLayout title="Dashboard" userName="Irfan">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Users" value="1,240" />
        <StatCard title="Revenue" value="$12,300" />
        <StatCard title="Orders" value="320" />
      </div>
    </AppLayout>
  )
}
