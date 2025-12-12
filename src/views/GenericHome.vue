<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Search, Heart } from "lucide-vue-next";
import BrandLogo from "../components/BrandLogo.vue";
import { useSimpleToast } from "../composables/useSimpleToast"; // 引入简单弹窗

const { triggerToast } = useSimpleToast();
const router = useRouter();
const searchInput = ref("");

const handleSearch = () => {
  if (searchInput.value) router.push(`/${searchInput.value}`);
};

// 轮播逻辑
const currentSlide = ref(0);
const slides = [
  {
    title: "Transform your wardrobe",
    sub: "Style smarter. Waste less.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
  },
  {
    title: "New Season Trends",
    sub: "Sustainable Choice",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
  },
  {
    title: "Upcycle Your Denim",
    sub: "DIY Guide",
    img: "https://images.unsplash.com/photo-1542272617-08f086303b96?w=800&q=80"
  }
];
let timer = null;
const startAutoPlay = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 4000);
};
onMounted(startAutoPlay);
onUnmounted(() => clearInterval(timer));

// 瀑布流数据
const inspirationItems = ref([
  {
    id: 1,
    title: "Denim tote",
    user: "Amara",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    img: "https://images.unsplash.com/photo-1590874102058-592535d7885e?w=400&q=80",
    badge: false,
    liked: false
  },
  {
    id: 2,
    title: "Blossom balloon pant",
    user: "Estella",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 3,
    title: "Botanical shirt",
    user: "Murzka",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 4,
    title: "Suit pants",
    user: "Raw",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=400&q=80",
    badge: false,
    liked: false
  },
  {
    id: 5,
    title: "Drawstring Pouch",
    user: "EcoLife",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 6,
    title: "Canvas Shopper",
    user: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80",
    badge: false,
    liked: false
  }
]);

// 合作伙伴 Logo
const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_of_Mango_%28new%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Gap_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/2560px-Bershka_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1280px-Zara_Logo.svg.png"
];

const goToDetail = (id) => router.push(`/detail/${id}`);
const goToInspiration = () => router.push("/inspiration");

const toggleLike = (item) => {
  item.liked = !item.liked; // 取反
  triggerToast(item.liked ? "Added to favorites" : "Removed from favorites"); // 弹窗
};
</script>

<template>
  <div class="page-content">
    <!-- 1. Header -->
    <header class="home-header">
      <BrandLogo :size="32" :showText="true" color="#5F7A63" />
    </header>

    <!-- 2. Hero Banner -->
    <div class="hero-banner">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
      >
        <img :src="slide.img" class="hero-img" />
        <div class="hero-overlay">
          <div class="overlay-content">
            <p class="hero-sub">{{ slide.sub }}</p>
            <h2 class="hero-title">{{ slide.title }}</h2>
          </div>
        </div>
      </div>
      <div class="dots-indicator">
        <span
          v-for="(_, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
        ></span>
      </div>
    </div>

    <!-- 3. Search -->
    <div class="search-section">
      <label class="search-label">Search by product ID</label>
      <div class="search-box">
        <input
          v-model="searchInput"
          type="text"
          placeholder="e.g. 4545677232"
          @keydown.enter="handleSearch"
        />
        <button class="search-btn" @click="handleSearch">
          <Search color="white" :size="20" />
        </button>
      </div>
    </div>

    <!-- 4. Inspiration Grid (带白色卡片效果) -->
    <div class="section-header">
      <h3>Upcycling inspiration</h3>
    </div>

    <div class="masonry-grid">
      <div
        v-for="item in inspirationItems"
        :key="item.id"
        class="grid-item card-wrap"
        @click="goToDetail(item.id)"
      >
        <div class="img-wrapper">
          <img :src="item.img" loading="lazy" />
          <div class="heart-badge" @click.stop="toggleLike(item)">
            <Heart
              :size="16"
              :fill="item.liked ? '#E53E3E' : 'none'"
              :color="item.liked ? '#E53E3E' : 'white'"
            />
          </div>
          <div v-if="item.badge" class="level-badge">{{ item.badge }}</div>
        </div>

        <div class="item-info">
          <div class="user-row">
            <img :src="item.avatar" class="avatar-tiny" />
            <span>{{ item.user }}</span>
          </div>
          <h4 class="item-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>

    <!-- 5. See More + Fade Mask -->
    <div class="fade-wrapper">
      <div class="fade-overlay"></div>
      <button class="see-more-btn" @click="goToInspiration">See more</button>
    </div>

    <!-- 6. Partners -->
    <div class="partners-section">
      <h3>Our partners</h3>
      <div class="partners-scroll">
        <img
          v-for="(logo, idx) in partners"
          :key="idx"
          :src="logo"
          class="partner-img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding-bottom: 120px;
  background: #fafafa;
}

/* Header */
.home-header {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

/* Hero Banner */
.hero-banner {
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  background: #f0f0f0;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
}
.slide.active {
  opacity: 1;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(232, 239, 233, 0.95) 0%,
    rgba(232, 239, 233, 0.8) 40%,
    transparent 100%
  );
  display: flex;
  align-items: center;
}
.overlay-content {
  padding-left: 24px;
  width: 50%;
}
.hero-sub {
  color: #5f7a63;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero-title {
  color: #1a202c;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}
.dots-indicator {
  position: absolute;
  bottom: 15px;
  left: 24px;
  display: flex;
  gap: 6px;
}
.dot {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.dot.active {
  background: #5f7a63;
  width: 16px;
  border-radius: 4px;
}

/* Search */
.search-section {
  text-align: center;
  margin-bottom: 30px;
}
.search-label {
  display: block;
  color: #5f7a63;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
}
.search-box {
  border: 1px solid #8fa889;
  border-radius: 30px;
  padding: 4px 6px 4px 20px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 4px 12px rgba(143, 168, 137, 0.1);
}
.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  background: transparent;
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

/* --- Grid Items (卡片样式调整) --- */
.section-header h3 {
  color: #1f2937;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
}
.masonry-grid {
  column-count: 2;
  column-gap: 16px;
}

/* 卡片容器：白色背景、圆角、阴影、内边距 */
.grid-item.card-wrap {
  break-inside: avoid;
  margin-bottom: 16px;
  cursor: pointer;
  background: white; /* 白色背景 */
  border-radius: 16px; /* 圆角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); /* 轻微浮起阴影 */
  overflow: hidden; /* 裁剪圆角 */
  padding-bottom: 12px; /* 底部留白给文字 */
  transition: transform 0.2s;
}
.grid-item.card-wrap:active {
  transform: scale(0.98);
}

/* 图片容器：顶部贴合，去掉下外边距 */
.img-wrapper {
  position: relative;
  background: #eee;
  margin-bottom: 10px; /* 图片和文字的间距 */
}
.img-wrapper img {
  width: 100%;
  display: block;
}

/* 文字信息区域：增加左右内边距 */
.item-info {
  padding: 0 10px;
}

.heart-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.25);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}
.level-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #5f7a63;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.user-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.avatar-tiny {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.user-row span {
  font-size: 11px;
  color: #718096;
}
.item-title {
  font-size: 13px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1.3;
}

/* Fade Mask + Button */
.fade-wrapper {
  position: relative;
  text-align: center;
  margin-top: -80px;
  padding-top: 50px;
  padding-bottom: 40px;
  z-index: 10;
}
.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(250, 250, 250, 0) 0%,
    rgba(250, 250, 250, 1) 40%
  );
  pointer-events: none;
  z-index: 1;
}
.see-more-btn {
  position: relative;
  z-index: 2;
  background: #5f7a63;
  color: white;
  padding: 12px 32px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(95, 122, 99, 0.3);
}

/* Partners */
.partners-section h3 {
  color: #1f2937;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.partners-scroll {
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
  padding-bottom: 10px;
  margin: 0 -24px;
  padding-left: 24px;
}
.partners-scroll::-webkit-scrollbar {
  display: none;
}
.partner-img {
  height: 24px;
  width: auto;
  object-fit: contain;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 0.3s;
}
.partner-img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
</style>
