import { createRouter, createWebHistory } from 'vue-router'
import { inject } from 'vue'

// === Import des layouts ===
import AppLayout from '@/components/layout/AppLayout.vue'
import AuthLayout from '@/components/layout/AuthLayout.vue'

// === Import des vues (lazy loading) ===
const Login = () => import('@/views/auth/Login.vue')
const Dashboard = () => import('@/views/dashboard/Dashboard.vue')
// const PressingList = () => import('@/views/pressings/PressingList.vue')
// const CommandeList = () => import('@/views/commandes/CommandeList.vue')
// // const ClientList = () => import('@/views/clients/ClientList.vue')
// // const EmployeList = () => import('@/views/employes/EmployeList.vue')
// const StockList = () => import('@/views/stocks/StockList.vue')

// === Routes ===
const routes = [
  // === Auth ===
  {
    path: '/login',
    component: Login,
    meta: {
      layout: 'auth',
      title: 'Connexion - PressLink'
    }
  },

  // === Dashboard (protégé) ===
  {
    path: '/',
    component: Dashboard,
    meta: {
      layout: 'app',
      requiresAuth: true,
      title: 'Tableau de bord - PressLink'
    }
  },

  // === Pressings ===
  // {
  //   path: '/pressings',
  //   component: PressingList,
  //   meta: {
  //     layout: 'app',
  //     requiresAuth: true,
  //     title: 'Pressings - PressLink',
  //     permission: 'manage_pressings'
  //   }
  // },

  // === Commandes ===
  // {
  //   path: '/commandes',
  //   component: CommandeList,
  //   meta: {
  //     layout: 'app',
  //     requiresAuth: true,
  //     title: 'Commandes - PressLink',
  //     permission: 'view_commandes'
  //   }
  // },

  // === Clients ===
  // {
  //   path: '/clients',
  //   component: ClientList,
  //   meta: {
  //     layout: 'app',
  //     requiresAuth: true,
  //     title: 'Clients - PressLink'
  //   }
  // },

  // === Employés ===
  // {
  //   path: '/employes',
  //   component: EmployeList,
  //   meta: {
  //     layout: 'app',
  //     requiresAuth: true,
  //     title: 'Employés - PressLink',
  //     permission: 'manage_employes'
  //   }
  // },

  // === Stocks ===
  // {
  //   path: '/stocks',
  //   component: StockList,
  //   meta: {
  //     layout: 'app',
  //     requiresAuth: true,
  //     title: 'Stocks - PressLink',
  //     permission: 'manage_stocks'
  //   }
  // },

  // === Route 404 (à ajouter à la fin) ===
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// === Création du router ===
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// === Garde globale (auth + permissions + titre) ===
router.beforeEach((to, from, next) => {
  const auth = inject('auth')

  // Titre de la page
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // Protection d'auth
  if (to.meta.requiresAuth && !auth?.isAuthenticated()) {
    return next('/login')
  }

  // Redirection si déjà connecté
  if (to.path === '/login' && auth?.isAuthenticated()) {
    return next('/')
  }

  // Vérification des permissions (si définie)
  if (to.meta.permission && auth?.can && !auth.can(to.meta.permission)) {
    alert('Accès refusé : permissions insuffisantes.')
    return next(from.path)
  }

  next()
})

export default router