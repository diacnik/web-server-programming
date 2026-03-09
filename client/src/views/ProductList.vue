<script setup lang="ts">
import { useProductStore } from '@/stores/products';

const products = useProductStore();
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <div class="grid is-col-min-10">
    <div v-for="product in products.products" :key="product.id" class="box">
      <img :src="product.thumbnail" alt="Product Image" class="is-4by3">
      <b>{{ product.title }}</b>
      {{ product.description }}
      <div class="price">${{ product.price.toFixed(2) }}</div>

    </div>
  </div>
</template>

<style scoped>
.add-button {
  float: right;
  margin-bottom: 1rem;
}

</style>
