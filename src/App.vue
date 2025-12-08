<script setup>
import { RouterView, useRouter, useRoute } from "vue-router";
import { Home, Lightbulb, Heart, User } from "lucide-vue-next"; // 引入 Lightbulb
import { useAuthStore } from "./stores/auth";

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
    <RouterView />

    <!-- 底部导航栏 -->
    <nav class="bottom-nav" v-if="route.name !== 'login'">
      <router-link to="/" class="nav-item">
        <Home :size="24" />
      </router-link>

      <!-- 修改点：第二个图标改为 Lightbulb，跳到 /inspiration -->
      <router-link to="/inspiration" class="nav-item">
        <Lightbulb :size="24" />
      </router-link>

      <div
        class="nav-item"
        :class="{ active: route.name === 'favorites' }"
        @click="handleFavoritesClick"
      >
        <Heart :size="24" />
      </div>

      <div
        class="nav-item"
        :class="{ active: route.name === 'profile' }"
        @click="handleProfileClick"
      >
        <User :size="24" />
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* 保持原有样式 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 440px;
  height: 70px;
  background: white;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
}
.nav-item {
  color: #cbd5e0;
  cursor: pointer;
  transition: color 0.3s;
}
.nav-item.router-link-active,
.nav-item.active {
  color: #8fa889;
}
</style>
