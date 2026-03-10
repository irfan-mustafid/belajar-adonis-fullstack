/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')

router
  .get('/', async ({ inertia }) => {
    return inertia.render('login')
  })
  .as('home')

router
  .get('/login', async ({ inertia }) => {
    return inertia.render('login')
  })
  .as('login')

router.post('/login', [AuthController, 'login']).as('login.post')
router
  .post('/logout', [AuthController, 'logout'])
  .as('logout')
  .use(middleware.auth({ guards: ['web'] }))
router
  .get('/dashboard', async ({ inertia }) => {
    return inertia.render('dashboard')
  })
  .as('dashboard')
  .use(middleware.auth({ guards: ['web'] }))
