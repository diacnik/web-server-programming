<script setup lang="ts">
import { useCartStore } from '@/stores/cart';


const cart = useCartStore();
</script>

<template>
  <div class="cart">
    <h1 class="title is-4">Shopping Cart</h1>
    <p v-if="cart.items.length == 0">Your cart is empty.</p>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.productId">
        Product ID: {{ item.productId }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
    <p v-if="cart.items.length > 0" class="total">Total Items: {{ cart.items.reduce((total, item) => total + item.quantity, 0 ) }}</p>

  </div>
</template>

<style scoped>
.cart {
  padding: .5rem;
}
</style>
