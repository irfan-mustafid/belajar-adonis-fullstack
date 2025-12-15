import { Head } from '@inertiajs/react'
import AppLayout from '~/layouts/AppLayout'
import { Card, CardBody } from '@heroui/react'

export default function Dashboard() {
  return (
    <AppLayout>
      <Head title="Dashboard" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold mt-2">1,234</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-3xl font-bold mt-2">$45,678</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold">Orders</h3>
              <p className="text-3xl font-bold mt-2">567</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
