<script setup lang="ts">
import ShoppingCart from '@/components/ShoppingCart.vue';
import SideBar from '@/components/SideBar.vue';
import { useProductStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const products = useProductStore();
const cart = useCartStore();

function addToCart(productId: number) {
  cart.addItem(productId);
}
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <div class="grid is-col-min-10">
    <div v-for="product in products.products" :key="product.id" class="box">
      <img :src="product.thumbnail" alt="Product Image" class="is-4by3">
      <h4 class="title is-6">{{ product.title }}</h4>
      <h6 class="subtitle is-7">{{ product.category }} / {{ product.brand }}</h6>
      {{ product.description }}
      <button class="button is-primary is-small add-button" @click="addToCart(product.id)">Add to Cart</button>
      <div>
        <span class="price">${{ product.price.toFixed(2) }}</span>
      </div>
    </div>
  </div>
  <SideBar :width="300" class="sidebar">
   <ShoppingCart />
  </SideBar>

</template>

<style scoped>
.add-button {
  float: right;
  margin-bottom: 1rem;
}

.subtitle {
  margin-bottom: 0.5rem;
  font-style: italic;
}

.sidebar {
  background-color: white;
}

.price {
  font-weight: bold;
  color: #3273dc;
}

</style>
