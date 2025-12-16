<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ArrowLeft, Heart } from "lucide-vue-next";
import { useSimpleToast } from "../composables/useSimpleToast";

// 导入本地图片
import imgTote from "@/assets/production/Upcycling guides/Denim tote.webp";
import imgJacket from "@/assets/production/Upcycling guides/Denim Jacket Cuff with Sweater Patchwork.webp";
import imgPocket from "@/assets/production/Upcycling guides/Denim pocket organizer.webp";
import imgHair from "@/assets/production/Upcycling guides/Hair Accessories .webp";
import imgWallet from "@/assets/production/Upcycling guides/Denim wallet.webp";
import imgBag from "@/assets/production/Upcycling guides/Vintage denim bag.webp";

const router = useRouter();
const { triggerToast } = useSimpleToast();

// 使用 ref 定义数据，以便修改 liked 状态
const guides = ref([
  {
    id: 201,
    title: "Denim tote",
    user: "W CONCEPT",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    img: imgTote,
    badge: null,
    liked: false
  },
  {
    id: 202,
    title: "Denim Jacket Cuff with Sweater Patchwork",
    user: "Estella Pacocha",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    img: imgJacket,
    badge: null,
    liked: false
  },
  {
    id: 203,
    title: "Denim pocket organizer",
    user: "Amara",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    img: imgPocket,
    badge: null,
    liked: false
  },
  {
    id: 204,
    title: "Hair Accessories",
    user: "Raw",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    img: imgHair,
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 205,
    title: "Denim wallet",
    user: "Murzka",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    img: imgWallet,
    badge: "Beginner friendly",
    liked: false
  },
  {
    id: 206,
    title: "Vintage denim bag",
    user: "Annabelle Beer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    img: imgBag,
    badge: null,
    liked: false
  }
]);

// 卡片点击逻辑：只有 202 能进，其他拦截
const handleCardClick = (item) => {
  if (item.id === 202) {
    router.push(`/detail/${item.id}`);
  } else {
    triggerToast("Coming soon...");
  }
};

// 点赞逻辑
const toggleLike = (item) => {
  item.liked = !item.liked;
  triggerToast(item.liked ? "Added to favorites" : "Removed from favorites");
};
</script>

<template>
  <div class="page-content">
    <header class="nav-header">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Upcycling guides</h1>
      <div class="placeholder"></div>
    </header>

    <div class="masonry-grid">
      <div
        v-for="item in guides"
        :key="item.id"
        class="grid-card"
        @click="handleCardClick(item)"
      >
        <div class="img-wrapper">
          <img :src="item.img" loading="lazy" />

          <!-- 爱心按钮 -->
          <div class="heart-badge" @click.stop="toggleLike(item)">
            <Heart
              :size="18"
              :fill="item.liked ? '#E53E3E' : 'none'"
              :color="item.liked ? '#E53E3E' : 'white'"
            />
          </div>

          <div v-if="item.badge" class="level-pill">
            {{ item.badge }}
          </div>
        </div>

        <div class="card-info">
          <div class="user-row">
            <img :src="item.avatar" class="avatar" />
            <span class="username">{{ item.user }}</span>
          </div>
          <h3 class="item-title">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #fafafa;
  min-height: 100vh;
  padding: 0 20px 40px 20px;
}
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

.img-wrapper {
  position: relative;
  background: #f4f4f4;
}
.img-wrapper img {
  width: 100%;
  display: block;
}
.heart-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  z-index: 10;
  cursor: pointer;
}
.level-pill {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #e8efe9;
  color: #5f7a63;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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
