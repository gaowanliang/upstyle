<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Search } from "lucide-vue-next";
import MasonryGrid from "../components/MasonryGrid.vue";

const router = useRouter();
const searchInput = ref("");

// --- 1. 搜索逻辑 ---
// const handleSearch = () => {
//   if (!searchInput.value) return;
//   // 如果输入的是纯数字，跳转到商品页，否则跳转到搜索结果页
//   if (/^\d+$/.test(searchInput.value)) {
//     router.push(`/${searchInput.value}`);
//   } else {
//     router.push({ name: "search", query: { q: searchInput.value } });
//   }
// };

// --- 2. 真实轮播图逻辑 ---
const currentSlide = ref(0);
const slides = [
  {
    title: "Summer Collection",
    sub: "New Arrival",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600"
  },
  {
    title: "Eco Friendly",
    sub: "Sustainable",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
  },
  {
    title: "Vintage Style",
    sub: "Trend",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600"
  }
];
let timer = null;
const startAutoPlay = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 3000);
};
onMounted(startAutoPlay);
onUnmounted(() => clearInterval(timer));

const handleSearch = () => {
  router.push("/search");
};

// --- 3. 底部随机分享数据 ---
const userShares = [
  {
    id: 101,
    user: "Anna_Style",
    title: "My new tote bag",
    img: "https://images.unsplash.com/photo-1661347365630-8df7327cdd71??w=300"
  },
  {
    id: 102,
    user: "EcoMike",
    title: "Recycled Chair",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300"
  },
  {
    id: 103,
    user: "Sarah.J",
    title: "Denim Jacket Hack",
    img: "https://images.unsplash.com/photo-1758696719220-d74c091a71c7?w=300"
  },
  {
    id: 104,
    user: "GreenLife",
    title: "Plant Hanger",
    img: "https://images.unsplash.com/photo-1664647061919-62a4881cb65c?w=300"
  }
];
</script>

<template>
  <div class="page-content">
    <header class="home-header">
      <!-- 左侧：问候语 -->
      <div class="header-text">
        <h1>Hello User!</h1>
        <p>Style smarter. Waste less.</p>
      </div>

      <!-- 右侧：Logo 图片 -->
      <div class="header-logo">
        <!-- 这里放你的 logo 图片路径，例如 src="@/assets/logo.png" -->
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
    </header>

    <!-- 真实轮播 Banner -->
    <div class="hero-banner">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
      >
        <div class="content">
          <h3>{{ slide.sub }}</h3>
          <h2>{{ slide.title }}</h2>
        </div>
        <img :src="slide.img" class="hero-img" />
      </div>

      <!-- 指示点 -->
      <div class="dots-indicator">
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
        ></span>
      </div>
    </div>

    <!-- 搜索条 (ID跳转) -->
    <div class="search-section">
      <label>Search by clothing category or product ID</label>
      <div class="search-input-box" @click="handleSearch">
        <!-- 添加 readonly 属性，防止在主页弹出键盘，把它当按钮用 -->
        <input
          type="text"
          placeholder="e.g. 123456"
          readonly
          style="cursor: pointer"
        />
        <button class="search-btn">
          <Search color="white" :size="20" />
        </button>
      </div>
    </div>

    <!-- 底部：随机用户分享 -->
    <h3 class="section-title">Community Shares</h3>
    <MasonryGrid :items="userShares" />
  </div>
</template>

<style scoped>
header {
  margin-bottom: 24px;
}

/* 轮播样式 */
.hero-banner {
  background: #e8efe9;
  border-radius: 24px;
  height: 180px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  padding-left: 24px;
  box-sizing: border-box;
}
.slide.active {
  opacity: 1;
  z-index: 1;
}

.content {
  z-index: 2;
  position: relative;
}
.content h3 {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6e8569;
}
.content h2 {
  font-size: 24px;
  color: #2d3748;
  line-height: 1.1;
  margin-top: 4px;
}
.hero-img {
  position: absolute;
  right: -20px;
  top: 0;
  height: 100%;
  width: 60%;
  object-fit: cover;
  mask-image: linear-gradient(to left, black 80%, transparent);
}

.dots-indicator {
  position: absolute;
  bottom: 15px;
  left: 24px;
  display: flex;
  gap: 6px;
  z-index: 3;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(110, 133, 105, 0.3);
  transition: all 0.3s;
}
.dot.active {
  width: 16px;
  background: #6e8569;
  border-radius: 4px;
}

.search-section {
  text-align: center;
  margin-bottom: 32px;
}
label {
  font-size: 12px;
  font-weight: 600;
  color: #8fa889;
  display: block;
  margin-bottom: 12px;
}

.search-input-box {
  background: white;
  border: 1px solid #8fa889;
  border-radius: 50px;
  padding: 6px 6px 6px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(143, 168, 137, 0.2);
}
input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
}
.search-btn {
  width: 40px;
  height: 40px;
  background: #8fa889;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  margin-bottom: 16px;
  font-size: 18px;
  color: #6e8569;
}

/* 新增：Header 的 Flex 布局，让左右分开 */
.home-header {
  display: flex;
  justify-content: space-between; /* 关键：让左右两端对齐 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 24px; /* 保持原来的下边距 */
}

/* 左侧文字微调 */
.header-text h1 {
  margin: 0;
  font-size: 28px;
  color: #2d3748;
}
.header-text p {
  margin: 4px 0 0;
  color: #8fa889; /* 鼠尾草绿 */
  font-size: 14px;
}

/* 右侧 Logo 容器样式 */
.header-logo {
  width: 48px;
  height: 48px;
  background: white; /* 给 logo 加个白色底，更突出 */
  border-radius: 50%; /* 圆形背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* 加点阴影更有质感 */
}

/* 图片本身的样式 */
.header-logo img {
  width: 28px; /* 控制图片大小 */
  height: 28px;
  object-fit: contain;
}
</style>
