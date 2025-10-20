<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
      <h2 class="text-2xl font-bold mb-2">Bienvenue, {{ user?.nom }} 👋</h2>
      <p class="text-blue-100">Voici un aperçu de vos activités aujourd'hui</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">{{ stat.label }}</p>
            <p class="text-3xl font-bold text-gray-900 mt-2">{{ stat.value }}</p>
            <p :class="['text-sm mt-2', stat.trend === 'up' ? 'text-green-600' : 'text-red-600']">
              <span class="font-medium">{{ stat.change }}</span>
              <span class="text-gray-500"> vs hier</span>
            </p>
          </div>
          <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', stat.bgColor]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.iconColor]" />
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Orders -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-800">Commandes récentes</h3>
          <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Voir tout
          </button>
        </div>
        <div class="space-y-3">
          <div
            v-for="order in recentOrders"
            :key="order.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-blue-600 font-semibold text-sm">{{ order.initials }}</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ order.client }}</p>
                <p class="text-sm text-gray-500">{{ order.code }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900">{{ order.amount }} FCFA</p>
              <span :class="['text-xs px-2 py-1 rounded-full', getStatusClass(order.status)]">
                {{ order.status }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock Alerts -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-800">Alertes de stock</h3>
          <span class="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
            {{ stockAlerts.length }} alertes
          </span>
        </div>
        <div class="space-y-3">
          <div
            v-for="alert in stockAlerts"
            :key="alert.id"
            class="flex items-center justify-between p-3 bg-red-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ alert.item }}</p>
                <p class="text-sm text-gray-500">Quantité: {{ alert.quantity }} {{ alert.unit }}</p>
              </div>
            </div>
            <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Revenue Chart -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold text-gray-800">Revenu mensuel</h3>
        <div class="flex items-center space-x-2">
          <button
            v-for="period in ['7j', '30j', '6m', '1an']"
            :key="period"
            class="px-3 py-1 text-sm rounded-lg hover:bg-gray-100 transition"
            :class="selectedPeriod === period ? 'bg-blue-600 text-white' : 'text-gray-600'"
            @click="selectedPeriod = period"
          >
            {{ period }}
          </button>
        </div>
      </div>
      <div class="h-64 flex items-end justify-between space-x-2">
        <div
          v-for="(bar, index) in revenueData"
          :key="index"
          class="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition cursor-pointer relative group"
          :style="{ height: bar.height + '%' }"
        >
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {{ bar.value }} FCFA
          </div>
          <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
            {{ bar.label }}
          </div>
        </div>
      </div>
      <div class="mt-8 pt-4 border-t border-gray-200">
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span class="text-gray-600">Revenu total</span>
          </div>
          <span class="font-semibold text-gray-900">1,250,000 FCFA</span>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          v-for="action in quickActions"
          :key="action.label"
          @click="handleQuickAction(action.path)"
          class="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition group"
        >
          <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-2 transition', action.bgColor, 'group-hover:scale-110']">
            <component :is="action.icon" :class="['w-6 h-6', action.iconColor]" />
          </div>
          <span class="text-sm font-medium text-gray-700 group-hover:text-blue-600">
            {{ action.label }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const user = ref(null);
const selectedPeriod = ref('30j');

const stats = ref([
  {
    label: 'Clients',
    value: '248',
    change: '+12.5%',
    trend: 'up',
    icon: 'UsersIcon',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Commandes',
    value: '89',
    change: '+8.2%',
    trend: 'up',
    icon: 'ShoppingBagIcon',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    label: 'Revenu',
    value: '1.2M',
    change: '+15.3%',
    trend: 'up',
    icon: 'CashIcon',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    label: 'En attente',
    value: '12',
    change: '-5.1%',
    trend: 'down',
    icon: 'ClockIcon',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
]);

const recentOrders = ref([
  { id: 1, client: 'Jean Kouassi', code: 'CMD-001', amount: '25,000', status: 'En cours', initials: 'JK' },
  { id: 2, client: 'Marie Diallo', code: 'CMD-002', amount: '18,500', status: 'Terminé', initials: 'MD' },
  { id: 3, client: 'Paul Koffi', code: 'CMD-003', amount: '32,000', status: 'En attente', initials: 'PK' },
  { id: 4, client: 'Sophie Traoré', code: 'CMD-004', amount: '15,000', status: 'En cours', initials: 'ST' }
]);

const stockAlerts = ref([
  { id: 1, item: 'Détergent liquide', quantity: 5, unit: 'L' },
  { id: 2, item: 'Cintres', quantity: 15, unit: 'unités' },
  { id: 3, item: 'Sacs plastiques', quantity: 50, unit: 'pcs' }
]);

const revenueData = ref([
  { label: 'Lun', value: '45,000', height: 60 },
  { label: 'Mar', value: '52,000', height: 70 },
  { label: 'Mer', value: '38,000', height: 50 },
  { label: 'Jeu', value: '65,000', height: 85 },
  { label: 'Ven', value: '78,000', height: 100 },
  { label: 'Sam', value: '42,000', height: 55 },
  { label: 'Dim', value: '35,000', height: 45 }
]);

const quickActions = ref([
  { label: 'Nouveau client', icon: 'UserPlusIcon', path: '/clients', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { label: 'Nouvelle commande', icon: 'PlusCircleIcon', path: '/commandes', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { label: 'Gérer stocks', icon: 'BoxIcon', path: '/stocks', bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
  { label: 'Voir rapports', icon: 'ChartIcon', path: '/reports', bgColor: 'bg-orange-100', iconColor: 'text-orange-600' }
]);

const getStatusClass = (status) => {
  const classes = {
    'En cours': 'bg-blue-100 text-blue-600',
    'Terminé': 'bg-green-100 text-green-600',
    'En attente': 'bg-orange-100 text-orange-600'
  };
  return classes[status] || 'bg-gray-100 text-gray-600';
};

const handleQuickAction = (path) => {
  router.push(path);
};

onMounted(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    user.value = JSON.parse(userData);
  }
});

// Icon components
const UsersIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
};

const ShoppingBagIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`
};

const CashIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`
};

const ClockIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
};

const UserPlusIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>`
};

const PlusCircleIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
};

const BoxIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`
};

const ChartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
};
</script>