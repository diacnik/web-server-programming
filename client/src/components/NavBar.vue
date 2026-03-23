<script setup lang="ts">

import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isActive = ref(false);
const cartStore = useCartStore();

function toggleCart() {
  console.log('Cart toggled');
  cartStore.isCartSideBarOpen = !cartStore.isCartSideBarOpen;
}

</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
      @click="isActive = !isActive" :class="{ 'is-active': isActive }">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
    <div class="navbar-start">
      <RouterLink to="/" active-class="is-active" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/products" class="navbar-item">
        Products
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a to="/more" class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <RouterLink to="/contact" class="navbar-item">
            Contact
          </RouterLink>
          <hr class="navbar-divider">
          <RouterLink to="/report-issue" class="navbar-item">
            Report an issue
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <a @click="toggleCart">
          <span class="tag is-danger is-normal is-round count" v-if="cartStore.count">
            {{ cartStore.count }}
          </span>
          <span class="icon">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </a>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
</template>

<style scoped>

</style>
