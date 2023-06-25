<template>
  <div class="w-full py-2">
    <div class="container ">
      <div>
        <img
          src="mainLogo.png"
          alt=""
          class="image-logo"
        />
      </div>
      <div class="menu-container">
        <div
          class="menu-item"
          v-for="item in routes"
          :key="item.path"
        >
          <router-link
            :to="item.path"
            class="router-link"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes';

</script>

<style scoped>
.container {
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
}

.image-logo {
  width: 180px;
}

.menu-container {
  display: flex;
  align-items: center;
}

.menu-item {
  padding-left: 24px;
}

.router-link {
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.router-link-active {
  color: var(--color-main);
}</style>
