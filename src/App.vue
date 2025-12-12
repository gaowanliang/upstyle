<script setup>
import { RouterView, useRouter, useRoute } from "vue-router";
import { Home, Lightbulb, Heart, User } from "lucide-vue-next";
import { useAuthStore } from "./stores/auth";
import GlobalToast from "./components/GlobalToast.vue"; // 引入组件

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

const handleProfileClick = () => {
  if (auth.isLoggedIn) router.push("/profile");
  else router.push("/login");
};

const handleFavoritesClick = () => {
  if (auth.isLoggedIn) router.push("/favorites");
  else router.push("/login");
};
</script>

<template>
  <div class="app-container">
    <!-- 全局通知组件 -->
    <GlobalToast />

    <RouterView />

    <nav
      class="bottom-nav"
      v-if="!['login', 'product-home', 'settings'].includes(route.name)"
    >
      <router-link to="/" class="nav-item">
        <Home :size="22" />
        <span class="nav-label">Home</span>
      </router-link>

      <router-link to="/inspiration" class="nav-item">
        <Lightbulb :size="22" />
        <span class="nav-label">Community</span>
      </router-link>

      <div
        class="nav-item"
        :class="{ active: route.name === 'favorites' }"
        @click="handleFavoritesClick"
      >
        <Heart :size="22" />
        <span class="nav-label">Favorite</span>
      </div>

      <div
        class="nav-item"
        :class="{ active: route.name === 'profile' }"
        @click="handleProfileClick"
      >
        <User :size="22" />
        <span class="nav-label">Profile</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* 保持原有样式不变 */
.app-container {
  background: #fafafa;
  min-height: 100vh;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 440px;
  height: 75px;
  background: white;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
  padding-bottom: 5px;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #a0aec0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;
  width: 60px;
}
.nav-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.3px;
}
.nav-item.router-link-active,
.nav-item.active {
  color: #5f7a63;
}
</style>
