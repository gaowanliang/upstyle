<script setup>
import { useRoute, useRouter } from "vue-router";
import { Sparkles, Scissors, ArrowLeft } from "lucide-vue-next";
const route = useRoute();
const router = useRouter();

// 模拟跳转到功能页，实际中可以携带 query: { productId: route.params.id }
const goStyling = () => router.push('/styling-tips') // 跳转到图一
const goUpcycling = () => router.push('/upcycling-list') // 跳转到图二
</script>

<template>
  <div class="page-content">
    <div class="page-header">
      <button class="back-btn" @click="router.push('/')">
        <ArrowLeft :size="20" color="#333" />
      </button>
      <div class="header-text">
        <h2>Product #{{ route.params.id }}</h2>
        <p>Current Item Dashboard</p>
      </div>
    </div>

    <!-- 主图 -->
    <div class="product-hero">
      <img
        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
      />
      <div class="status-tag"><span class="dot"></span> Active Item</div>
    </div>

    <!-- 修复后的功能按钮 -->
    <div class="actions-row">
      <div class="action-btn" @click="goStyling">
        <div class="icon-box"><Sparkles :size="24" /></div>
        <span>Get styling tips</span>
      </div>
      <div class="action-btn outline" @click="goUpcycling">
        <div class="icon-box"><Scissors :size="24" /></div>
        <span>View upcycling guide</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}
.back-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 10;
}
.header-text {
  flex: 1;
  text-align: center;
}
.header-text h2 {
  font-size: 20px;
}

.product-hero {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  height: 340px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.product-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.status-tag {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(4px);
}
.dot {
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
}

.actions-row {
  display: flex;
  gap: 16px;
}
.action-btn {
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s;
}
.action-btn:active {
  transform: scale(0.98);
}
.action-btn {
  background: #8fa889;
  color: white;
  box-shadow: 0 8px 20px rgba(143, 168, 137, 0.3);
}
.action-btn.outline {
  background: white;
  color: #333;
  border: 2px solid #e8efe9;
  box-shadow: none;
}
.action-btn.outline .icon-box {
  color: #8fa889;
}
</style>
