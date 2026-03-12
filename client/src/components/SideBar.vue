<script setup lang="ts">

const props = defineProps<{
  width?: number;
}>();

</script>

<template>
  <div class="side-bar" :class="{ 'is-Active': false }" :style="{ width: props.width + 'px' }">
    <div class="temp">
      <h2 class="title is-4">Shopping Cart</h2>
      <p>Your cart is empty.</p>
    </div>

  </div>
</template>

<style scoped>
.side-bar {
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border-left: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(90%);
  transition: transform 0.3s ease;
}

.side-bar:hover,
.side-bar.is-Active {
  transform: translateX(0);
}

.temp {
  padding: 1rem;
  background-color: aliceblue;
}

</style>
