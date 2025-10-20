<template>
  <div class="container mx-auto p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Gestion des Clients</h1>
      <button
        @click="openModal('create')"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        Nouveau Client
      </button>
    </div>

    <!-- Search Bar -->
    <div class="bg-white p-4 rounded-lg shadow mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="searchFilters.nom"
          @input="debouncedSearch"
          type="text"
          placeholder="Rechercher par nom..."
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="searchFilters.telephone"
          @input="debouncedSearch"
          type="text"
          placeholder="Rechercher par téléphone..."
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="resetSearch"
          class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Réinitialiser
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div v-if="loading" class="p-8 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
      
      <table v-else class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pressing</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Création</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="client in clients.data" :key="client.id_client" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ client.nom }}</div>
              <div v-if="client.responsable" class="text-sm text-gray-500">{{ client.responsable }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ client.telephone }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ client.email || '-' }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ client.pressing?.nom_pressing || '-' }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(client.date_creation) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="viewClient(client)"
                class="text-blue-600 hover:text-blue-900 mr-3"
                title="Voir"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
              <button
                @click="openModal('edit', client)"
                class="text-green-600 hover:text-green-900 mr-3"
                title="Modifier"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </button>
              <button
                @click="confirmDelete(client)"
                class="text-red-600 hover:text-red-900"
                title="Supprimer"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div v-if="clients.data && clients.data.length > 0" class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-700">
            Affichage de {{ clients.from }} à {{ clients.to }} sur {{ clients.total }} résultats
          </div>
          <div class="flex gap-2">
            <button
              @click="changePage(clients.current_page - 1)"
              :disabled="!clients.prev_page_url"
              :class="[
                'px-3 py-1 rounded',
                clients.prev_page_url 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              ]"
            >
              Précédent
            </button>
            <button
              @click="changePage(clients.current_page + 1)"
              :disabled="!clients.next_page_url"
              :class="[
                'px-3 py-1 rounded',
                clients.next_page_url 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              ]"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Form -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4">
          {{ modalMode === 'create' ? 'Nouveau Client' : 'Modifier Client' }}
        </h2>
        
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
              <input
                v-model="formData.nom"
                type="text"
                required
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
              <input
                v-model="formData.telephone"
                type="tel"
                required
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Responsable</label>
              <input
                v-model="formData.responsable"
                type="text"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Pressing *</label>
              <select
                v-model="formData.id_pressing"
                required
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionner un pressing</option>
                <option v-for="pressing in pressings" :key="pressing.id_pressing" :value="pressing.id_pressing">
                  {{ pressing.nom_pressing }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex gap-3 mt-6">
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              {{ submitting ? 'En cours...' : (modalMode === 'create' ? 'Créer' : 'Modifier') }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Toast Notification -->
    <div
      v-if="toast.show"
      :class="[
        'fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white',
        toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
      ]"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

// State
const clients = ref({ data: [], total: 0, current_page: 1 });
const pressings = ref([]);
const loading = ref(false);
const submitting = ref(false);
const showModal = ref(false);
const modalMode = ref('create');

const searchFilters = reactive({
  nom: '',
  telephone: ''
});

const formData = reactive({
  id_client: null,
  nom: '',
  telephone: '',
  email: '',
  responsable: '',
  id_pressing: ''
});

const toast = reactive({
  show: false,
  message: '',
  type: 'success'
});

// API Base URL
const API_URL = '/api';

// Methods
const fetchClients = async (page = 1) => {
  loading.value = true;
  try {
    const params = new URLSearchParams({ page });
    if (searchFilters.nom) params.append('nom', searchFilters.nom);
    if (searchFilters.telephone) params.append('telephone', searchFilters.telephone);
    
    const endpoint = searchFilters.nom || searchFilters.telephone ? 'search' : '';
    const response = await axios.get(`${API_URL}/clients/${endpoint}?${params}`);
    clients.value = response.data;
  } catch (error) {
    showToast('Erreur lors du chargement des clients', 'error');
  } finally {
    loading.value = false;
  }
};

const fetchPressings = async () => {
  try {
    const response = await axios.get(`${API_URL}/pressings`);
    pressings.value = response.data.data || response.data;
  } catch (error) {
    showToast('Erreur lors du chargement des pressings', 'error');
  }
};

const openModal = (mode, client = null) => {
  modalMode.value = mode;
  showModal.value = true;
  
  if (mode === 'edit' && client) {
    Object.assign(formData, client);
  } else {
    resetForm();
  }
};

const closeModal = () => {
  showModal.value = false;
  resetForm();
};

const resetForm = () => {
  formData.id_client = null;
  formData.nom = '';
  formData.telephone = '';
  formData.email = '';
  formData.responsable = '';
  formData.id_pressing = '';
};

const submitForm = async () => {
  submitting.value = true;
  try {
    if (modalMode.value === 'create') {
      await axios.post(`${API_URL}/clients`, formData);
      showToast('Client créé avec succès', 'success');
    } else {
      await axios.put(`${API_URL}/clients/${formData.id_client}`, formData);
      showToast('Client modifié avec succès', 'success');
    }
    
    closeModal();
    fetchClients(clients.value.current_page);
  } catch (error) {
    showToast('Erreur lors de l\'enregistrement', 'error');
  } finally {
    submitting.value = false;
  }
};

const confirmDelete = (client) => {
  if (confirm(`Êtes-vous sûr de vouloir désactiver le client "${client.nom}" ?`)) {
    deleteClient(client.id_client);
  }
};

const deleteClient = async (id) => {
  try {
    await axios.delete(`${API_URL}/clients/${id}`);
    showToast('Client désactivé avec succès', 'success');
    fetchClients(clients.value.current_page);
  } catch (error) {
    showToast('Erreur lors de la suppression', 'error');
  }
};

const viewClient = (client) => {
  // Navigate to client details page or show details modal
  console.log('View client:', client);
};

const changePage = (page) => {
  fetchClients(page);
};

const resetSearch = () => {
  searchFilters.nom = '';
  searchFilters.telephone = '';
  fetchClients();
};

let searchTimeout;
const debouncedSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    fetchClients();
  }, 500);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR');
};

const showToast = (message, type = 'success') => {
  toast.message = message;
  toast.type = type;
  toast.show = true;
  setTimeout(() => {
    toast.show = false;
  }, 3000);
};

// Lifecycle
onMounted(() => {
  fetchClients();
  fetchPressings();
});
</script>