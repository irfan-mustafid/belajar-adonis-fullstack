/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Guest routes
router.on('/').renderInertia('login')
router.get('/login', ({ inertia }) => inertia.render('login')).as('login')

// Protected routes
router.get('/dashboard', ({ inertia }) => inertia.render('dashboard')).as('dashboard')
