<script setup>
import { useRoute, useRouter } from "vue-router";
import { ArrowLeft, Copy, Sparkles, Scissors } from "lucide-vue-next";
import { ref } from "vue";

// 引入本地产品图片
import productImg from "@/assets/production/product.webp";

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
    <!-- 顶部导航 -->
    <header class="top-nav">
      <button class="back-btn" @click="goHome">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Product</h1>
      <div class="placeholder"></div>
    </header>

    <!-- 产品大图 -->
    <div class="product-display">
      <!-- 使用本地图片变量 -->
      <img :src="productImg" alt="Denim Jacket" />
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
      <div class="card-btn styling" @click="goStyling">
        <div class="bg-shape circle-bl"></div>
        <div class="card-content">
          <Sparkles :size="28" color="white" stroke-width="1.5" />
          <span>Styling tips</span>
        </div>
      </div>

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

/* Top Nav */
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.back-btn {
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
}
.placeholder {
  width: 44px;
}

/* Product Display */
.product-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.product-display img {
  width: 90%;
  max-width: 340px;
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
