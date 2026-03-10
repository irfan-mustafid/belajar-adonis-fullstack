import { BaseSeeder } from '@adonisjs/lucid/seeders'
import env from '#start/env'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    const defaultPassword = env.get('SEEDER_DEFAULT_PASSWORD', 'ChangeMe!@2024')

    // Create admin user
    await User.updateOrCreate(
      { username: 'admin' },
      {
        email: 'admin@example.com',
        username: 'admin',
        password: defaultPassword,
      }
    )

    // Create adminsales_it user
    await User.updateOrCreate(
      { username: 'adminsales_it' },
      {
        email: 'adminsales_it@example.com',
        username: 'adminsales_it',
        password: defaultPassword,
      }
    )
  }
}
