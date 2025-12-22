import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async login({ auth, request, response }: HttpContext) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const user = await User.verifyCredentials(username, password)
      await auth.use('web').login(user)
      console.log(user)

      return response.redirect().toRoute('dashboard')
    } catch (error) {
      return response.status(400).json({
        errors: [{ message: 'Invalid user credentials' }],
      })
    }
  }
}
