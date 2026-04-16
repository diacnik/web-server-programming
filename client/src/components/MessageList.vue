<script setup lang="ts">
import useSessionStore from '@/stores/session';
const sessionStore = useSessionStore();
</script>

<template>
  <div>
    <div class="message-list">
      <div v-for="(message, index) in sessionStore.messages" :key="index" class="message">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
