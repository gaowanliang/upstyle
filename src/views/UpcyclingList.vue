<script setup>
import { useRouter } from "vue-router";
import { ArrowLeft, Heart } from "lucide-vue-next";

const router = useRouter();

// 模拟图片中的数据
const guides = [
  {
    id: 1,
    title: "Denim tote",
    user: "W CONCEPT",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    img: "https://images.unsplash.com/photo-1590874102058-592535d7885e?w=600&q=80",
    badge: null
  },
  {
    id: 2,
    title: "Denim Jacket Cuff with Sweater Patchwork",
    user: "Estella Pacocha",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    img: "https://images.unsplash.com/photo-1542272617-08f086303b96?w=600&q=80",
    badge: null
  },
  {
    id: 3,
    title: "Denim pocket organizer",
    user: "Amara",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    img: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?w=600&q=80", // 类似收纳袋
    badge: null
  },
  {
    id: 4,
    title: "Hair Accessories",
    user: "Raw",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    img: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&q=80", // 发圈
    badge: "Beginner friendly"
  },
  {
    id: 5,
    title: "Denim wallet",
    user: "Murzka",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80", // 钱包
    badge: "Beginner friendly"
  },
  {
    id: 6,
    title: "Vintage denim bag",
    user: "Annabelle Beer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80", // 抽绳包
    badge: null
  }
];

const goToDetail = (id) => router.push(`/detail/${id}`);
</script>

<template>
  <div class="page-content">
    <!-- 顶部导航 -->
    <header class="nav-header">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Upcycling guides</h1>
      <div class="placeholder"></div>
    </header>

    <!-- 瀑布流列表 -->
    <div class="masonry-grid">
      <div
        v-for="item in guides"
        :key="item.id"
        class="grid-card"
        @click="goToDetail(item.id)"
      >
        <!-- 图片区域 -->
        <div class="img-wrapper">
          <img :src="item.img" loading="lazy" />

          <!-- 右上角收藏按钮 -->
          <div class="heart-badge">
            <Heart :size="18" color="white" />
          </div>

          <!-- 右下角标签 (如果有) -->
          <div v-if="item.badge" class="level-pill">
            {{ item.badge }}
          </div>
        </div>

        <!-- 信息区域 -->
        <div class="card-info">
          <!-- 用户信息 -->
          <div class="user-row">
            <img :src="item.avatar" class="avatar" />
            <span class="username">{{ item.user }}</span>
          </div>
          <!-- 标题 -->
          <h3 class="item-title">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #fafafa; /* 浅灰底色 */
  min-height: 100vh;
  padding: 0 20px 40px 20px;
}

/* Nav Header */
.nav-header {
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

/* Masonry Layout */
.masonry-grid {
  column-count: 2;
  column-gap: 16px;
}

.grid-card {
  break-inside: avoid;
  background: white;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}
.grid-card:active {
  transform: scale(0.98);
}

/* Image Area */
.img-wrapper {
  position: relative;
  background: #f4f4f4;
  /* 图片高度自适应，但为了美观通常不设固定高，由图片决定 */
}
.img-wrapper img {
  width: 100%;
  display: block;
}

/* Heart Badge (Top Right) */
.heart-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.4); /* 半透明黑底 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

/* Level Pill (Bottom Right) */
.level-pill {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #e8efe9; /* 浅鼠尾草绿 */
  color: #5f7a63; /* 深鼠尾草绿文字 */
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Card Info */
.card-info {
  padding: 12px;
}

.user-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}
.avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
}
.username {
  font-size: 11px;
  color: #888;
  font-weight: 500;
}

.item-title {
  font-size: 13px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1.4;
}
</style>
