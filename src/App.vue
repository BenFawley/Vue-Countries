<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="header-content">
      <div class="logo-wrapper">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
        <h1 class="logo-title">Vue Countries</h1>
      </div>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  widows: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 1rem 2rem;
}
.header-content{
  max-width: 1700px;
  width: 100%;
  margin: auto;
}

.logo {
  display: block;
  margin: 0;
}
.logo-wrapper{
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo-title{
  font-weight: 600;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 ;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .header-content{
    padding: 0 2rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
