<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import Auth from '@/layouts/Auth.vue'
import Main from '@/layouts/Main.vue'
const route = useRoute();
const isAuthLayout = computed(() => route.meta.layout === 'auth');
</script>
<template>
  <component :is="isAuthLayout ? Auth : Main">
    <RouterView />
  </component>
</template>
<style scoped></style>
