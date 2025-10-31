<template>
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <img src="" alt="PressLink" class="h-16 mx-auto" />
    </div>
    <div class="bg-white rounded-xl shadow-lg p-8">
      <!-- Formulaire identique -->
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const auth = inject('auth')

const form = ref({ telephone: '', password: '' })
const loading = ref(false)
const error = ref('')

const login = async () => {
  loading.value = true
  try {
    const { data } = await axios.post('/api/login', {
      telephone: form.value.telephone,
      mot_de_passe: form.value.password
    })
    auth.set(data.token, data.user)
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || 'Erreur'
  } finally {
    loading.value = false
  }
}
</script>