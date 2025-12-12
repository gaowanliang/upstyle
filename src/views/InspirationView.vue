<script setup>
import { useRouter } from "vue-router";
import { Heart } from "lucide-vue-next";
import { useSimpleToast } from "../composables/useSimpleToast"; // 引入简单弹窗
import { ref } from "vue"; // 引入 ref

const { triggerToast } = useSimpleToast();

const router = useRouter();

// 模拟更加丰富的数据 (12条) -> 使用 ref 包裹使其变为响应式
const inspirations = ref([
  {
    id: 1,
    title: "Denim tote bag",
    user: "Anna_Style",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    img: "https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=600&q=80",
    badge: null,
    liked: false
  },
  {
    id: 2,
    title: "Restored Vintage Chair",
    user: "Eco_Mike",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    badge: "Intermediate",
    liked: false
  },
  {
    id: 3,
    title: "Embroidery on Denim",
    user: "SarahC",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    img: "https://images.unsplash.com/photo-1466027449668-27f96b692ba4?w=600&q=80",
    badge: null,
    liked: false
  },
  {
    id: 4,
    title: "DIY Concrete Planter",
    user: "GreenLife",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 5,
    title: "Patchwork Jeans Design",
    user: "VintageLover",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&q=80",
    badge: null,
    liked: false
  },
  {
    id: 6,
    title: "Tie-Dye Summer Shirt",
    user: "Creative_Jo",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&q=80",
    badge: "Quick & Easy",
    liked: false
  },
  {
    id: 7,
    title: "Recycled Bottle Vases",
    user: "UpcyclePro",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 8,
    title: "Cropped Sweater Hack",
    user: "FashionFix",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
    badge: null,
    liked: false
  },
  {
    id: 9,
    title: "Fabric Scrap Accessories",
    user: "ZeroWaste",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    img: "https://images.unsplash.com/photo-1684766933106-fb7fec5b90e4?w=600&q=80",
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 10,
    title: "Hand Painted Jacket",
    user: "DesignDaily",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    img: "https://images.unsplash.com/photo-1570904153053-82e152257512?w=600&q=80",
    badge: "Advanced",
    liked: false
  },
  {
    id: 11,
    title: "Macrame Plant Hanger",
    user: "PlantDad",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    img: "https://images.unsplash.com/photo-1691748260255-5394f0c8cdfd?w=600&q=80",
    badge: null,
    liked: false
  },
  {
    id: 12,
    title: "Custom Reworked Dress",
    user: "SewingBee",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    badge: "Advanced",
    liked: false
  }
]);

const goToDetail = (id) => router.push(`/detail/${id}`);

const toggleLike = (item) => {
  item.liked = !item.liked; // 取反
  triggerToast(item.liked ? "Added to favorites" : "Removed from favorites"); // 弹窗
};
</script>

<template>
  <div class="page-content">
    <!-- 顶部标题 (Community 页面通常是主导航，不需要返回按钮，但保持标题样式一致) -->
    <header class="nav-header">
      <div class="placeholder"></div>
      <!-- 占位保持标题居中 -->
      <h1 class="page-title">Upcycling inspiration</h1>
      <div class="placeholder"></div>
    </header>

    <!-- 瀑布流列表 -->
    <div class="masonry-grid">
      <div
        v-for="item in inspirations"
        :key="item.id"
        class="grid-card"
        @click="goToDetail(item.id)"
      >
        <!-- 图片区域 -->
        <div class="img-wrapper">
          <img :src="item.img" loading="lazy" />

          <!-- 右上角收藏按钮 (深色半透明背景) -->
          <div class="heart-badge" @click.stop="toggleLike(item)">
            <Heart
              :size="18"
              :fill="item.liked ? '#E53E3E' : 'none'"
              :color="item.liked ? '#E53E3E' : 'white'"
            />
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

    <!-- 到底了提示 -->
    <div class="end-marker">You've reached the end</div>
  </div>
</template>

<style scoped>
.page-content {
  background: #fafafa; /* 浅灰底色 */
  min-height: 100vh;
  padding: 0 20px 100px 20px; /* 底部 padding 留给导航栏 */
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
.page-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
}
.placeholder {
  width: 44px;
} /* 占位用 */

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

.end-marker {
  text-align: center;
  color: #cbd5e0;
  font-size: 12px;
  margin-top: 20px;
}
</style>
