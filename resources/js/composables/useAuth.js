import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export function useAuth() {
  const router = useRouter()
  const auth = inject('auth')

  const user = computed(() => auth.user())
  const isAuthenticated = computed(() => auth.isAuthenticated())
  const token = computed(() => localStorage.getItem('presslink_token'))

  const login = async (credentials) => {
    try {
      const { data } = await axios.post('/api/login', {
        telephone: credentials.telephone,
        mot_de_passe: credentials.password
      })

      auth.set(data.token, data.user)
      return { success: true, user: data.user }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erreur de connexion'
      }
    }
  }

  const logout = async () => {
    try {
      await axios.post('/api/logout')
    } catch (e) {}
    auth.clear()
    router.push('/login')
  }

  const check = () => {
    if (!isAuthenticated.value) router.push('/login')
  }

  const hasRole = (role) => {
    return user.value?.role === role
  }

  const can = (permission) => {
    const permissions = {
      'view_dashboard': ['admin', 'caissier', 'repasser'],
      'manage_pressings': ['admin'],
      'manage_employes': ['admin'],
      'create_commande': ['caissier', 'repasser'],
    }
    return permissions[permission]?.includes(user.value?.role)
  }

  return {
    user,
    isAuthenticated,
    token,
    login,
    logout,
    check,
    hasRole,
    can
  }
}