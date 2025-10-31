<template>
  <aside class="w-64 bg-white shadow-md">
    <div class="p-6">
      <img src="" alt="PressLink" class="h-10" />
    </div>
    <nav class="mt-6">
      <router-link to="/" class="flex items-center px-6 py-3 text-dark hover:bg-light-alt">
        <LucideIcon name="home" class="w-5 h-5 mr-3" /> Dashboard
      </router-link>
      <router-link to="/pressings" class="flex items-center px-6 py-3 text-dark hover:bg-light-alt">
        <LucideIcon name="store" class="w-5 h-5 mr-3" /> Pressings
      </router-link>
      <!-- Ajoute les autres -->
    </nav>
  </aside>
</template>