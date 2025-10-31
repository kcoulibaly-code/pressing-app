<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="px-6 py-4 flex items-center justify-between">
      <!-- Titre de la page -->
      <div class="flex items-center space-x-3">
        <h1 class="text-xl font-semibold text-dark capitalize">
          {{ pageTitle }}
        </h1>
        <span v-if="pageSubtitle" class="text-sm text-muted">
          {{ pageSubtitle }}
        </span>
      </div>

      <!-- Profil + Notifications + Logout -->
      <div class="flex items-center space-x-4">
        <!-- Notifications -->
        <button
          @click="toggleNotifications"
          class="relative p-2 text-gray-600 hover:text-primary hover:bg-light-alt rounded-full transition"
        >
          <LucideIcon name="bell" class="w-5 h-5" />
          <span
            v-if="unreadCount > 0"
            class="absolute top-0 right-0 h-2 w-2 bg-danger rounded-full"
          ></span>
        </button>

        <!-- Dropdown Notifications -->
        <div
          v-if="showNotifications"
          class="absolute right-6 top-16 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
        >
          <div class="p-4 border-b">
            <h3 class="font-medium text-dark">Notifications</h3>
          </div>
          <div class="max-h-96 overflow-y-auto">
            <div
              v-for="notif in notifications"
              :key="notif.id"
              class="p-4 border-b hover:bg-light-alt cursor-pointer"
            >
              <p class="text-sm font-medium text-dark">{{ notif.title }}</p>
              <p class="text-xs text-muted mt-1">{{ notif.message }}</p>
              <p class="text-xs text-muted mt-2">{{ formatTime(notif.time) }}</p>
            </div>
            <div v-if="notifications.length === 0" class="p-8 text-center text-muted">
              Aucune notification
            </div>
          </div>
        </div>

        <!-- Profil -->
        <div class="relative" v-click-outside="closeDropdown">
          <button
            @click="toggleDropdown"
            class="flex items-center space-x-3 p-2 rounded-full hover:bg-light-alt transition"
          >
            <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-medium">
              {{ userInitials }}
            </div>
            <div class="hidden md:block text-left">
              <p class="text-sm font-medium text-dark">{{ user?.nom || 'Utilisateur' }}</p>
              <p class="text-xs text-muted">{{ userRoleLabel }}</p>
            </div>
            <LucideIcon name="chevron-down" class="w-4 h-4 text-muted" />
          </button>

          <!-- Dropdown Profil -->
          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          >
            <div class="p-3 border-b">
              <p class="text-sm font-medium text-dark">{{ user?.nom }}</p>
              <p class="text-xs text-muted">{{ user?.telephone }}</p>
            </div>
            <router-link
              to="/profile"
              class="flex items-center px-4 py-2 text-sm text-dark hover:bg-light-alt"
            >
              <LucideIcon name="user" class="w-4 h-4 mr-2" /> Profil
            </router-link>
            <router-link
              to="/settings"
              class="flex items-center px-4 py-2 text-sm text-dark hover:bg-light-alt"
            >
              <LucideIcon name="settings" class="w-4 h-4 mr-2" /> Paramètres
            </router-link>
            <div class="border-t"></div>
            <button
              @click="logout"
              class="w-full flex items-center px-4 py-2 text-sm text-danger hover:bg-light-alt"
            >
              <LucideIcon name="log-out" class="w-4 h-4 mr-2" /> Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LucideIcon from '@/components/ui/LucideIcon.vue'

// === Inject Auth ===
const auth = inject('auth')
const router = useRouter()
const route = useRoute()

// === User ===
const user = computed(() => auth.user())

const userInitials = computed(() => {
  if (!user.value?.nom) return 'U'
  return user.value.nom.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

const userRoleLabel = computed(() => {
  const roles = { admin: 'Administrateur', caissier: 'Caissier', repasseur: 'Repasseur' }
  return roles[user.value?.role] || user.value?.role || 'Employé'
})

// === Page Title (dynamique) ===
const pageTitle = computed(() => {
  const titles = {
    '/': 'Tableau de bord',
    '/pressings': 'Pressings',
    '/commandes': 'Commandes',
    '/clients': 'Clients',
    '/employes': 'Employés'
  }
  return titles[route.path] || 'PressLink'
})

const pageSubtitle = ref('')

// === Dropdowns ===
const showDropdown = ref(false)
const showNotifications = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
  showNotifications.value = false
}

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  showDropdown.value = false
}

const closeDropdown = () => {
  showDropdown.value = false
  showNotifications.value = false
}

// === Notifications (exemple) ===
const unreadCount = ref(3)
const notifications = ref([
  { id: 1, title: 'Nouvelle commande', message: 'Commande #1245 reçue', time: '2025-04-05T10:30:00' },
  { id: 2, title: 'Paiement reçu', message: '15 000 FCFA de M. Traoré', time: '2025-04-05T09:15:00' },
  { id: 3, title: 'Stock faible', message: 'Lessive presque épuisée', time: '2025-04-04T18:00:00' }
])

const formatTime = (date) => {
  const d = new Date(date)
  const now = new Date()
  const diff = now - d
  if (diff < 60000) return 'À l\'instant'
  if (diff < 3600000) return `${Math.floor(diff / 60000)} min`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} h`
  return d.toLocaleDateString('fr-FR')
}

// === Logout ===
const logout = () => {
  auth.clear()
  router.push('/login')
}

// === Click Outside Directive ===
const vClickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>