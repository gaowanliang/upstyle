<script setup>
import { useRouter } from "vue-router";
import { ArrowLeft, ChevronRight } from "lucide-vue-next";
const router = useRouter();

const categories = ["All", "Casual", "Work", "Date"];
const items = [
  {
    id: 1,
    title: "Denim Layering",
    sub: "Best for: Cool weather",
    img: "https://images.unsplash.com/photo-1542272617-08f086303b96?w=200&q=80"
  },
  {
    id: 2,
    title: "Wide Leg Trousers",
    sub: "Best for: Office",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&q=80"
  },
  {
    id: 3,
    title: "Silk Scarf",
    sub: "Best for: Accessories",
    img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=200&q=80"
  },
  {
    id: 4,
    title: "White Sneakers",
    sub: "Best for: Daily walk",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&q=80"
  }
];
</script>

<template>
  <div class="page-content">
    <div class="nav-bar">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" />
      </button>
      <h2>Styling Tips</h2>
      <div style="width: 24px"></div>
    </div>

    <!-- 横向滚动筛选 -->
    <div class="filter-scroll">
      <button
        v-for="(cat, index) in categories"
        :key="cat"
        :class="['chip', index === 0 ? 'active' : '']"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 列表 -->
    <div class="list-container">
      <div
        v-for="item in items"
        :key="item.id"
        class="list-item"
        @click="router.push(`/detail/${item.id}`)"
      >
        <img :src="item.img" class="thumb" />
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.sub }}</p>
        </div>
        <div class="arrow-box">
          <ChevronRight :size="20" color="#7A9A7E" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 20px 24px;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.nav-bar h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.back-btn {
  padding: 8px;
  margin-left: -8px;
  border-radius: 50%;
  transition: background 0.2s;
}
.back-btn:active {
  background: #eee;
}

.filter-scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin-bottom: 30px;
  padding-bottom: 5px;
}
.filter-scroll::-webkit-scrollbar {
  display: none;
}
.chip {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  border: 1px solid #eee;
  color: var(--text-muted);
  transition: all 0.2s;
  white-space: nowrap;
}
.chip.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.list-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s;
}
.list-item:active {
  transform: scale(0.98);
}
.thumb {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 16px;
}
.info {
  flex: 1;
}
.info h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  color: var(--text-main);
}
.info p {
  margin: 0;
  font-size: 12px;
  color: var(--text-muted);
}
.arrow-box {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
