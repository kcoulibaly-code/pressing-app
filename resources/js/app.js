import { createApp } from 'vue'
import router from './router'  // Import du router
import App from './App.vue'
// import './css/app.css'          // Réactive le CSS (Tailwind)
import axios from 'axios'

// === Axios config ===
axios.defaults.baseURL = '/api'
const token = localStorage.getItem('presslink_token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// === App ===
const app = createApp(App)

// === Provide Auth Globalement (avant le mount) ===
app.provide('auth', {
  set(token, user) {
    localStorage.setItem('presslink_token', token)
    localStorage.setItem('presslink_user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  clear() {
    localStorage.removeItem('presslink_token')
    localStorage.removeItem('presslink_user')
    delete axios.defaults.headers.common['Authorization']
  },
  user() {
    const u = localStorage.getItem('presslink_user')
    return u ? JSON.parse(u) : null
  },
  isAuthenticated() {
    return !!localStorage.getItem('presslink_token')
  }
})

// === Utilise le router (une seule fois) ===
app.use(router)

// === Monte l'app (une seule fois) ===
app.mount('#app')