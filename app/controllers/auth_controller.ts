import { type HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import crypto from 'node:crypto'

export default class AuthController {
  async login({ auth, request, response, session }: HttpContext) {
    const username = request.input('username')
    const password = request.input('password')

    if (!username || !password) {
      return response.redirect().toRoute('login')
    }
    try {
      const user = await User.findBy('username', username)

      if (!user) {
        throw new Error('User not found')
      }

      // Check if password is MD5 (32 char hex)
      const isMD5 = user.password.length === 32 && /^[a-f0-9]+$/.test(user.password)

      let isPasswordValid = false

      if (isMD5) {
        // Verify MD5 password
        const md5Hash = crypto.createHash('md5').update(password).digest('hex')

        isPasswordValid = md5Hash === user.password
      } else {
        // Verify with default scrypt
        const userVerified = await User.verifyCredentials(username, password)
        isPasswordValid = !!userVerified
      }

      if (!isPasswordValid) {
        throw new Error('Invalid credentials')
      }

      await auth.use('web').login(user)
      return response.redirect().toRoute('dashboard')
    } catch (error) {
      session.flash('errors', {
        username: 'Invalid user credentials',
      })
      return response.redirect().back()
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('login')
  }
}
