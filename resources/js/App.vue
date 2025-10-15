<template>
  <div>
    <h1>Bienvenue sur mon app Laravel + Vue 3 🚀</h1>
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">À propos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// Rien pour le moment
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
