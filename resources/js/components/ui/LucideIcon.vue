<template>
  <component :is="icon" class="inline-block" v-bind="$attrs" />
</template>

<script setup>
import { defineProps } from 'vue'
import * as lucide from 'lucide-vue-next'

const props = defineProps({
  name: { type: String, required: true }
})

const icon = computed(() => lucide[props.name] || lucide['alert-circle'])
</script>