<script setup lang="ts">

const props = defineProps<{
  width?: number,
  isActive?: boolean
}>();

</script>

<template>
  <div class="side-bar" :class="{ 'is-Active': props.isActive }" :style="{ width: props.width + 'px' }">
    <slot />
  </div>
</template>

<style scoped>
.side-bar {
  width: 250px;
  position: fixed;
  top: 56px; /* Adjust if you have a fixed header */
  right: 0;
  height: calc(100% - 56px);
  border-left: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(90%);
  transition: transform 0.3s ease;
}

.side-bar:hover,
.side-bar.is-Active {
  transform: translateX(0);
}

</style>
