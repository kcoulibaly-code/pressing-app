<template>
  <div :class="cn('min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4', props.class)">
    <div class="w-full max-w-lg">
      <Card class="shadow-2xl border-0">
        <CardHeader class="text-center space-y-3 pb-10">
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <CardTitle class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Gestion Pressing
          </CardTitle>
          <CardDescription class="text-base text-gray-600">
            Connectez-vous à votre espace
          </CardDescription>
        </CardHeader>
        
        <CardContent class="space-y-6 px-8 pb-8">
          <form @submit.prevent="login">
            <div class="space-y-6">
              <!-- Identifiant -->
              <div class="space-y-3">
                <Label for="identifier" class="text-sm font-semibold text-gray-700">
                  Email ou Matricule
                </Label>
                <div class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <Input
                    id="identifier"
                    v-model="form.identifier"
                    type="text"
                    placeholder="Matricule ou email"
                    class="pl-12 h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <!-- Mot de passe -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <Label for="password" class="text-sm font-semibold text-gray-700">
                    Mot de passe
                  </Label>
                  <a
                    href="#"
                    class="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <div class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <Input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="pl-12 pr-12 h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Message d'erreur -->
              <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ error }}</span>
              </div>

              <!-- Bouton de connexion -->
              <Button 
                type="submit" 
                class="w-full h-13 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200"
                :disabled="loading"
              >
                <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ loading ? 'Connexion...' : 'Se connecter' }}
              </Button>
            </div>
          </form>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-gray-200"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-white px-2 text-gray-500">
                Besoin d'aide ?
              </span>
            </div>
          </div>

          <!-- Support -->
          <div class="text-center">
            <a href="#" class="text-sm text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Contacter le support technique
            </a>
          </div>
        </CardContent>
      </Card>

      <!-- Footer -->
      <div class="mt-6 text-center text-xs text-gray-500">
        © 2025 Gestion Pressing. Tous droits réservés.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const router = useRouter()
const auth = inject('auth')

const form = ref({ 
  identifier: '', // Peut être email ou matricule
  password: '' 
})
const loading = ref(false)
const error = ref('')
const showPassword = ref(false)

const login = async () => {
  loading.value = true
  error.value = ''
  
  try {
    // Détection automatique du type d'identifiant
    const isEmail = form.value.identifier.includes('@')
    
    const payload = isEmail 
      ? { email: form.value.identifier, mot_de_passe: form.value.password }
      : { matricule: form.value.identifier, mot_de_passe: form.value.password }
    
    const { data } = await axios.post('/api/login', payload)
    
    // Authentification réussie
    auth?.set(data.token, data.user)
    router.push('/')
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Identifiants incorrects. Veuillez réessayer.'
  } finally {
    loading.value = false
  }
}
</script>