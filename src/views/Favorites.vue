<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { Heart } from "lucide-vue-next";
import { useSimpleToast } from "../composables/useSimpleToast"; // 引入弹窗

const router = useRouter();
const auth = useAuthStore();
const { triggerToast } = useSimpleToast(); // 初始化弹窗

// 鉴权：未登录跳转
if (!auth.isLoggedIn) {
  router.push("/login");
}

// Tab 状态
const activeTab = ref("styling"); // 'styling' | 'upcycling'

// 1. Styling Tips 数据 (对应第一张图：穿搭) -> 改为 ref 并添加 liked: true
const stylingData = ref([
  {
    id: 101,
    title: "Denim & Pleated Khaki",
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80", // 牛仔外套+卡其裤
    liked: true
  },
  {
    id: 102,
    title: "Contrast Layering with Khaki",
    img: "https://images.unsplash.com/photo-1530856021941-02c71be5926f?w=600&q=80", // 绿色衬衫
    liked: true
  },
  {
    id: 103,
    title: "Lightweight Down, Big Warmth",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", // 灰色外套
    liked: true
  },
  {
    id: 104,
    title: "Blue Vintage Varsity Pullover",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", // 蓝色卫衣
    liked: true
  }
]);

// 2. Upcycling Guides 数据 (对应第二张图：改造) -> 改为 ref 并添加 liked: true
const upcyclingData = ref([
  {
    id: 201,
    title: "Denim wallet",
    user: "Murzka",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    badge: "Beginner friendly",
    liked: true
  },
  {
    id: 202,
    title: "Suit pants",
    user: "Raw",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&q=80",
    badge: null,
    liked: true
  },
  {
    id: 203,
    title: "Embroidery Art",
    user: "Annabelle Beer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    img: "https://images.unsplash.com/photo-1734873741744-759ea0a3b3e5?w=600&q=80", // 卫衣领口刺绣
    badge: null,
    liked: true
  },
  {
    id: 204,
    title: "Denim Jacket Cuff with Sweater Patchwork",
    user: "Estella Pacocha",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    img: "https://images.unsplash.com/photo-1660166445759-c69bb6e7f004?w=600&q=80", // 牛仔拼毛衣
    badge: null,
    liked: true
  }
]);

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};

// 切换收藏状态
const toggleLike = (item) => {
  item.liked = !item.liked;
  triggerToast(item.liked ? "Added to favorites" : "Removed from favorites");
};
</script>

<template>
  <div class="page-content">
    <!-- Header -->
    <header class="page-header">
      <h1>Favorite</h1>
    </header>

    <!-- Tabs -->
    <div class="tabs-bar">
      <div
        class="tab-item"
        :class="{ active: activeTab === 'styling' }"
        @click="activeTab = 'styling'"
      >
        Styling tips
      </div>
      <div
        class="tab-item"
        :class="{ active: activeTab === 'upcycling' }"
        @click="activeTab = 'upcycling'"
      >
        Upcycling guides
      </div>
    </div>

    <!-- Content List -->
    <div class="masonry-grid">
      <!-- 场景 A: Styling Tips -->
      <template v-if="activeTab === 'styling'">
        <div
          v-for="item in stylingData"
          :key="item.id"
          class="grid-card styling-card"
          @click="goToDetail(item.id)"
        >
          <div class="img-wrapper">
            <img :src="item.img" loading="lazy" />
            <div class="heart-btn" @click.stop="toggleLike(item)">
              <!-- 动态爱心 -->
              <Heart
                :size="18"
                :fill="item.liked ? '#E53E3E' : 'none'"
                :color="item.liked ? '#E53E3E' : 'white'"
              />
            </div>
          </div>
          <div class="card-info">
            <h3 class="simple-title">{{ item.title }}</h3>
          </div>
        </div>
      </template>

      <!-- 场景 B: Upcycling Guides -->
      <template v-else>
        <div
          v-for="item in upcyclingData"
          :key="item.id"
          class="grid-card upcycle-card"
          @click="goToDetail(item.id)"
        >
          <div class="img-wrapper">
            <img :src="item.img" loading="lazy" />
            <div class="heart-btn" @click.stop="toggleLike(item)">
              <!-- 动态爱心 -->
              <Heart
                :size="18"
                :fill="item.liked ? '#E53E3E' : 'none'"
                :color="item.liked ? '#E53E3E' : 'white'"
              />
            </div>
            <!-- Beginner Badge -->
            <div v-if="item.badge" class="badge-pill">
              {{ item.badge }}
            </div>
          </div>

          <div class="card-info">
            <div class="user-row">
              <img :src="item.avatar" class="avatar" />
              <span class="username">{{ item.user }}</span>
            </div>
            <h3 class="complex-title">{{ item.title }}</h3>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #fafafa;
  min-height: 100vh;
  padding-bottom: 100px; /* 留给底部导航 */
}

/* Header */
.page-header {
  padding: 20px 0;
  text-align: center;
  background: #fafafa;
}
.page-header h1 {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

/* Tabs */
.tabs-bar {
  display: flex;
  background: #fafafa;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
}
.tab-item {
  flex: 1;
  text-align: center;
  padding: 14px 0;
  font-size: 15px;
  font-weight: 600;
  color: #a0aec0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}
.tab-item.active {
  color: #5f7a63; /* 选中后的深绿色文字 */
  border-bottom-color: #5f7a63; /* 选中后的深绿色下划线 */
}

/* Masonry Grid */
.masonry-grid {
  padding: 20px;
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
}

/* Image Wrapper (Common) */
.img-wrapper {
  position: relative;
  background: #f4f4f4;
}
.img-wrapper img {
  width: 100%;
  display: block;
}

/* Red Heart Button (Fixed Top Right) */
.heart-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.25); /* 半透明黑底 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

/* --- Styling Tips Card Specifics --- */
.styling-card .card-info {
  padding: 12px;
}
.simple-title {
  font-size: 13px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1.4;
}

/* --- Upcycling Card Specifics --- */
.upcycle-card .card-info {
  padding: 12px;
}
.badge-pill {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(232, 239, 233, 0.95);
  color: #5f7a63;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
}
.username {
  font-size: 11px;
  color: #718096;
}
.complex-title {
  font-size: 13px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1.4;
}
</style>
