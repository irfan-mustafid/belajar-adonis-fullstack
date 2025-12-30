import { Head, useForm } from '@inertiajs/react'
import GuestLayout from '~/layouts/GuestLayout'
import { Input, Button, Card, CardBody, Form } from '@heroui/react'

interface FormLogin {
  username: string
  password: string
  [key: string]: string
}

const Login = () => {
  const { data, setData, post, processing, errors } = useForm<FormLogin>({
    username: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <GuestLayout>
      <Head title="Login" />

      <Card
        shadow="lg"
        className="w-full bg-white max-w-md rounded-2xl border border-gray-300 shadow-2xs"
      >
        <CardBody className="gap-4 p-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <Form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <Input
              isRequired
              errorMessage={errors.username}
              isInvalid={!!errors.username}
              className="border rounded-md"
              // labelPlacement="outside"
              name="username"
              placeholder="Enter your username"
              type="text"
              size="lg"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />

            <Input
              type="password"
              placeholder="Enter your password"
              className="border rounded-md"
              size="lg"
              isRequired
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              errorMessage={errors.password}
              isInvalid={!!errors.password}
            />

            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={processing}
              className="w-full mt-2 rounded-md"
            >
              Sign In
            </Button>
          </Form>
        </CardBody>
      </Card>
    </GuestLayout>
  )
}

export default Login
