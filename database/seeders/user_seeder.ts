import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Create admin user
    await User.updateOrCreate(
      { username: 'admin' },
      {
        email: 'admin@example.com',
        username: 'admin',
        password: 'password123',
      }
    )

    // Create adminsales_it user
    await User.updateOrCreate(
      { username: 'adminsales_it' },
      {
        email: 'adminsales_it@example.com',
        username: 'adminsales_it',
        password: 'adminsales_it',
      }
    )
  }
}
