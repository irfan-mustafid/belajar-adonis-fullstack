import { Head, useForm } from '@inertiajs/react'
import GuestLayout from '~/layouts/GuestLayout'
import { Input, Button, Card, CardBody } from '@heroui/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <GuestLayout>
      <Head title="Login" />

      <Card shadow="lg" className="w-full">
        <CardBody className="gap-4 p-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <Input
              type="email"
              //   label="Email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              variant="bordered"
              size="lg"
              isRequired
            />

            <Input
              type="password"
              //   label="Password"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              isInvalid={!!errors.password}
              errorMessage={errors.password}
              variant="bordered"
              size="lg"
              isRequired
            />

            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={processing}
              className="w-full mt-2"
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </GuestLayout>
  )
}
