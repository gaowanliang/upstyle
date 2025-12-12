<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ArrowLeft, Heart, SlidersHorizontal } from "lucide-vue-next";

const router = useRouter();
const activeCat = ref("All");
const categories = [
  "All",
  "Casual",
  "Outdoor",
  "Professional",
  "Party",
  "Vintage"
];

// 模拟数据 (模拟图中展示的男士牛仔穿搭)
const allData = [
  {
    id: 1,
    title: "Denim & Black Trousers Clean Outfit",
    category: "Casual",
    img: "https://images.unsplash.com/photo-1512760206180-2d09c30f40f0?w=600&q=80" // 牛仔外套+黑裤
  },
  {
    id: 2,
    title: "Relaxed Denim, Beige Pants",
    category: "Casual",
    img: "https://images.unsplash.com/photo-1542842400-0e7d5893e387?w=600&q=80" // 牛仔+米色裤
  },
  {
    id: 3,
    title: "Denim & Pleated Khaki",
    category: "Outdoor",
    img: "https://images.unsplash.com/photo-1617137968427-85924c809a10?w=600&q=80" // 全身牛仔/工装
  },
  {
    id: 4,
    title: "Jacket & Navy Tones",
    category: "Professional",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" // 蓝色系
  },
  {
    id: 5,
    title: "Layered Hoodie Style",
    category: "Casual",
    img: "https://images.unsplash.com/photo-1515555230216-82228b88ea98?w=600&q=80"
  },
  {
    id: 6,
    title: "Smart Casual Look",
    category: "Professional",
    img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80"
  }
];

// 筛选逻辑
const currentItems = computed(() => {
  if (activeCat.value === "All") return allData;
  return allData.filter((item) => item.category === activeCat.value);
});

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};
</script>

<template>
  <div class="page-content">
    <!-- 1. 顶部导航 -->
    <header class="top-nav">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Styling tips</h1>
      <div class="placeholder"></div>
    </header>

    <!-- 2. 筛选栏 (胶囊 + 筛选图标) -->
    <div class="filter-section">
      <div class="chips-scroll">
        <button
          v-for="cat in categories"
          :key="cat"
          class="chip"
          :class="{ active: activeCat === cat }"
          @click="activeCat = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- 3. 瀑布流列表 -->
    <div class="masonry-grid">
      <transition-group name="fade">
        <div
          class="grid-item"
          v-for="item in currentItems"
          :key="item.id"
          @click="goToDetail(item.id)"
        >
          <div class="img-wrapper">
            <img :src="item.img" loading="lazy" />
            <!-- 爱心收藏按钮 -->
            <button class="heart-btn" @click.stop>
              <Heart :size="18" color="white" />
            </button>
          </div>

          <div class="card-info">
            <h4 class="item-title">{{ item.title }}</h4>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #ffffff;
  min-height: 100vh;
  padding: 0 20px 40px 20px;
}

/* --- Top Nav --- */
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
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
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

/* --- Filter Section --- */
.filter-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.chips-scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  flex: 1;
  padding-bottom: 4px; /* 防止滚动条遮挡 */
  scrollbar-width: none; /* Firefox */
}
.chips-scroll::-webkit-scrollbar {
  display: none;
} /* Chrome/Safari */

.chip {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}
/* 选中态：深绿背景白字 */
.chip.active {
  background: #5f7a63;
  color: white;
}
/* 未选中态：浅绿背景深字 */
.chip:not(.active) {
  background: #e8efe9;
  color: #768e73;
}

.filter-icon-btn {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

/* --- Masonry Grid --- */
.masonry-grid {
  column-count: 2;
  column-gap: 16px;
}
.grid-item {
  break-inside: avoid;
  background: white;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #f7f7f7;
}

.img-wrapper {
  position: relative;
  background: #f4f4f4;
  overflow: hidden;
}
.img-wrapper img {
  width: 100%;
  display: block;
}

/* 悬浮爱心 */
.heart-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

/* 右下角装饰 */
.sparkle-decor {
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

.card-info {
  padding: 12px;
}
.item-title {
  font-size: 13px;
  font-weight: 600;
  color: #1a202c;
  line-height: 1.4;
  margin: 0;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
