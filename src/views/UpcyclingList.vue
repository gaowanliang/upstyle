<script setup>
import { useRouter } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";

const router = useRouter();

const guides = [
  {
    id: 101,
    title: "Tote bag",
    badge: "Beginner friendly",
    img: "https://images.unsplash.com/photo-1623919268210-99a34497afde?w=400"
  },
  {
    id: 102,
    title: "Cushion cover",
    badge: "",
    img: "https://images.unsplash.com/photo-1575277340599-43db25b63b6f?w=400"
  },
  {
    id: 103,
    title: "Dog toy",
    badge: "Quick & Easy",
    img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400"
  },
  {
    id: 104,
    title: "Tie-dye",
    badge: "",
    img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400"
  }
];

const goToDetail = (id) => router.push(`/detail/${id}`);
</script>

<template>
  <div class="page-content">
    <div class="nav-header">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#333" />
      </button>
      <h2>View upcycling guide</h2>
      <div style="width: 24px"></div>
    </div>

    <!-- 2列网格 -->
    <div class="grid-container">
      <div
        v-for="item in guides"
        :key="item.id"
        class="guide-card"
        @click="goToDetail(item.id)"
      >
        <div class="img-area">
          <img :src="item.img" />

          <!-- 只有当有 badge 数据时才显示这个角标 -->
          <div v-if="item.badge" class="badge-pill">
            {{ item.badge }}
          </div>
        </div>
        <p class="card-title">{{ item.title }} →</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.back-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 16px;
}

.guide-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s;
}
.guide-card:active {
  transform: scale(0.97);
}

.img-area {
  position: relative;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 12px;
  background: #f0f2ef;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.img-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 角标样式：精致的胶囊形状，悬浮在上方 */
.badge-pill {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  background: rgba(
    143,
    168,
    137,
    0.95
  ); /* 鼠尾草绿，不透明度高一点保证可读性 */
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 15px;
  color: #2d3748;
  font-weight: 600;
  text-align: left;
  margin: 0 0 0 4px; /* 稍微对其图片左边 */
}
</style>
