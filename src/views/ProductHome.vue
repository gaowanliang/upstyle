<script setup>
import { useRoute, useRouter } from "vue-router";
import { Copy, Sparkles, Scissors } from "lucide-vue-next";
import { ref } from "vue";
import BrandLogo from "../components/BrandLogo.vue"; // 新增

const route = useRoute();
const router = useRouter();
const showCopied = ref(false);

const goHome = () => router.push("/");

const copyId = () => {
  navigator.clipboard.writeText(route.params.id);
  showCopied.value = true;
  setTimeout(() => (showCopied.value = false), 2000);
};

const goStyling = () => router.push("/styling-tips");
const goUpcycling = () => router.push("/upcycling-list");
</script>

<template>
  <div class="page-content">
    <!-- 顶部LOGO，点击返回首页 -->
    <header class="logo-header">
      <button class="logo-btn" @click="goHome">
        <BrandLogo :size="32" :showText="true" color="#5F7A63" />
      </button>
    </header>

    <!-- 产品大图 -->
    <div class="product-display">
      <img
        src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80"
        alt="Denim Jacket"
      />
    </div>

    <!-- 产品 ID -->
    <div class="product-id-row" @click="copyId">
      <span>Product ID #{{ route.params.id }}</span>
      <div class="copy-icon">
        <Copy :size="18" color="#5F7A63" />
      </div>
      <transition name="fade">
        <span v-if="showCopied" class="copied-toast">Copied!</span>
      </transition>
    </div>

    <!-- 功能按钮组 -->
    <div class="action-buttons">
      <!-- 左侧按钮：圆在左下角 -->
      <div class="card-btn styling" @click="goStyling">
        <div class="bg-shape circle-bl"></div>
        <div class="card-content">
          <Sparkles :size="28" color="white" stroke-width="1.5" />
          <span>Styling tips</span>
        </div>
      </div>

      <!-- 右侧按钮：圆在右上角 -->
      <div class="card-btn upcycling" @click="goUpcycling">
        <div class="bg-shape circle-tr"></div>
        <div class="card-content">
          <Scissors :size="28" color="white" stroke-width="1.5" />
          <span>Upcycling guides</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

/* 顶部LOGO样式 */
.logo-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.logo-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 产品大图 */
.product-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.product-display img {
  width: 80%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
}

/* ID Row */
.product-id-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #4a5568;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
  cursor: pointer;
  position: relative;
}
.copied-toast {
  position: absolute;
  top: -30px;
  background: #2d3748;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 50px;
}
.card-btn {
  flex: 1;
  height: 110px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.card-btn:active {
  transform: scale(0.97);
}
.styling {
  background-color: #768e73;
}
.upcycling {
  background-color: #333f4f;
}
.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  pointer-events: none;
}
.circle-bl {
  width: 140px;
  height: 140px;
  bottom: -40px;
  left: -40px;
}
.circle-tr {
  width: 160px;
  height: 160px;
  top: -60px;
  right: -30px;
}
.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-weight: 600;
  font-size: 14px;
}
</style>
