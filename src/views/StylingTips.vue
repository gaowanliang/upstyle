<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ArrowLeft, Heart, SlidersHorizontal } from "lucide-vue-next";
import { useSimpleToast } from "../composables/useSimpleToast"; // 修正引入

// 导入本地图片
import img1 from "@/assets/production/Styling tips/Denim & Black Trousers Clean Outfit.webp";
import img2 from "@/assets/production/Styling tips/Relaxed Denim, Beige Pants.webp";
import img3 from "@/assets/production/Styling tips/Denim & Pleated Khaki.webp";
import img4 from "@/assets/production/Styling tips/Jacket & Navy Tones.webp";

const router = useRouter();
const { triggerToast } = useSimpleToast(); // 使用弹窗控制器

const activeCat = ref("All");
const categories = ["All", "Casual", "Outdoor", "Professional"];

// 使用 ref 包裹数据，以便动态修改 liked 状态
const allData = ref([
  {
    id: 1,
    title: "Denim & Black Trousers Clean Outfit",
    category: "Casual",
    img: img1,
    liked: false // 本地状态
  },
  {
    id: 2,
    title: "Relaxed Denim, Beige Pants",
    category: "Casual",
    img: img2,
    liked: false
  },
  {
    id: 3,
    title: "Denim & Pleated Khaki",
    category: "Outdoor",
    img: img3,
    liked: false
  },
  {
    id: 4,
    title: "Jacket & Navy Tones",
    category: "Professional",
    img: img4,
    liked: false
  }
]);

const currentItems = computed(() => {
  if (activeCat.value === "All") return allData.value;
  return allData.value.filter((item) => item.category === activeCat.value);
});

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};

// 本地切换逻辑
const toggleLike = (item) => {
  item.liked = !item.liked;
  triggerToast(item.liked ? "Added to favorites" : "Removed from favorites");
};
</script>

<template>
  <div class="page-content">
    <header class="top-nav">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Styling tips</h1>
      <div class="placeholder"></div>
    </header>

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
      <button class="filter-icon-btn">
        <SlidersHorizontal :size="20" color="#333" />
      </button>
    </div>

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

            <!-- 修正后的点击事件 -->
            <button class="heart-btn" @click.stop="toggleLike(item)">
              <Heart
                :size="18"
                :fill="item.liked ? '#E53E3E' : 'none'"
                :color="item.liked ? '#E53E3E' : 'white'"
              />
            </button>

            <div class="sparkle-decor">✦</div>
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
  padding-bottom: 4px;
  scrollbar-width: none;
}
.chips-scroll::-webkit-scrollbar {
  display: none;
}
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
.chip.active {
  background: #5f7a63;
  color: white;
}
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
  cursor: pointer;
  z-index: 10;
}
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
