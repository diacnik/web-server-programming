<script setup lang="ts">

</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/" active-class="is-active" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        Documentation
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a to="/more" class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <RouterLink to="/jobs" class="navbar-item is-selected">
            Jobs
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
