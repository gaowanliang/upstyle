<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Search, ChevronRight } from "lucide-vue-next";

const router = useRouter();
const searchInput = ref("");

// --- 核心逻辑：类别数据 ---
const categories = [
  {
    id: "coats",
    name: "Coats & Jackets",
    cover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
    items: [
      // 该类别下的列表数据
      {
        id: 101,
        title: "Denim Jacket",
        img: "https://images.unsplash.com/photo-1608147152875-b0eb0c53d491?w=200"
      },
      {
        id: 102,
        title: "Beige Trench",
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200"
      },
      {
        id: 103,
        title: "Winter Puffer",
        img: "https://images.unsplash.com/photo-1711527124424-463764d8d8e5?w=200"
      }
    ]
  },
  {
    id: "tops",
    name: "Tops & Tees",
    cover: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    items: [
      {
        id: 201,
        title: "White Essential",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
      },
      {
        id: 202,
        title: "Silk Blouse",
        img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=200"
      },
      {
        id: 203,
        title: "Graphic Tee",
        img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200"
      }
    ]
  },
  {
    id: "shoes",
    name: "Shoes & Sneakers",
    cover: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
    items: [
      {
        id: 301,
        title: "Air Sneakers",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200"
      },
      {
        id: 302,
        title: "Leather Boots",
        img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
      },
      {
        id: 303,
        title: "Canvas Slip-on",
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200"
      }
    ]
  }
];

// 当前选中的类别索引
const activeIndex = ref(0);

// 获取当前类别对象
const currentCategory = computed(() => categories[activeIndex.value]);

// 切换类别逻辑
const nextCategory = () => {
  activeIndex.value = (activeIndex.value + 1) % categories.length;
};

const handleSearch = () => {
  if (/^\d+$/.test(searchInput.value)) {
    router.push(`/${searchInput.value}`);
  }
};

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};
</script>

<template>
  <div class="page-content">
    <!-- 顶部搜索框 (Lo-Fi 样式) -->
    <div class="search-bar-container">
      <div class="input-area">
        <input
          v-model="searchInput"
          type="text"
          placeholder=""
          @keydown.enter="handleSearch"
        />
      </div>
      <button class="search-icon-box" @click="handleSearch">
        <Search :size="24" color="#6E8569" />
      </button>
    </div>

    <!-- 大卡片轮播区 (用于切换类别) -->
    <div class="carousel-wrapper">
      <!-- 主卡片 -->
      <div class="large-card main" @click="nextCategory">
        <img :src="currentCategory.cover" class="card-img" />
        <div class="card-text">
          <h3>Category</h3>
          <h1 v-html="currentCategory.name.replace(' & ', '<br>& ')"></h1>
        </div>
        <!-- 装饰用的暗色遮罩，增加文字可读性 -->
        <div class="card-overlay"></div>
      </div>

      <!-- 旁边露出的一点点 (暗示可以滑动) -->
      <div class="large-card side" @click="nextCategory">
        <img
          :src="categories[(activeIndex + 1) % categories.length].cover"
          class="card-img"
        />
        <div class="card-overlay" style="opacity: 0.6"></div>
      </div>
    </div>

    <!-- 指示点 (点击切换) -->
    <div class="dots-row">
      <span
        v-for="(cat, index) in categories"
        :key="cat.id"
        class="dot"
        :class="{
          active: index === activeIndex,
          hollow: index !== activeIndex
        }"
        @click="activeIndex = index"
      ></span>
    </div>

    <!-- 类别标题 (动态变化) -->
    <h3 class="category-title">{{ currentCategory.name }}</h3>

    <!-- 列表结果 (根据类别动态变化) -->
    <div class="result-list">
      <transition-group name="fade">
        <div
          class="list-item"
          v-for="item in currentCategory.items"
          :key="item.id"
          @click="goToDetail(item.id)"
        >
          <div class="avatar">
            <img :src="item.img" />
          </div>
          <div class="info-lines">
            <div class="line-title">{{ item.title }}</div>
            <!-- 模拟 Lo-Fi 的条状信息 -->
            <div class="line-sub"></div>
          </div>
          <!-- 模拟 Lo-Fi 的胶囊 Tag -->
          <div class="pill-tag"></div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
/* 搜索框 */
.search-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #8fa889;
  border-radius: 16px;
  height: 50px;
  padding: 0 8px 0 16px;
  margin-bottom: 24px;
  background: white;
}
.input-area {
  flex: 1;
  height: 100%;
}
.input-area input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #333;
}
.search-icon-box {
  width: 36px;
  height: 36px;
  border: 1px solid #8fa889;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
}

/* 轮播容器 */
.carousel-wrapper {
  display: flex;
  gap: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  /* 增加高度确保阴影不被切断 */
  padding-bottom: 20px;
}

/* 大卡片 */
.large-card {
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(143, 168, 137, 0.3);
  transition: transform 0.3s ease, opacity 0.3s;
  cursor: pointer;
}

.large-card.main {
  width: 85%;
  height: 380px;
  flex-shrink: 0;
  background: #8fa889;
  z-index: 2;
}
/* 点击动画效果 */
.large-card.main:active {
  transform: scale(0.98);
}

.large-card.side {
  width: 15%;
  height: 360px;
  margin-top: 10px;
  opacity: 0.6;
  flex-shrink: 0;
  background: #6e8569;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
}

.card-text {
  position: absolute;
  bottom: 30px;
  left: 24px;
  color: white;
  z-index: 3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.card-text h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  opacity: 0.9;
}
.card-text h1 {
  font-size: 32px;
  line-height: 1.1;
  margin: 8px 0 0;
}

/* 指示点 */
.dots-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #8fa889;
  transition: all 0.3s;
  cursor: pointer;
}
.dot.hollow {
  background: transparent;
  border: 1px solid #8fa889;
}
.dot.active {
  width: 24px;
  border-radius: 5px;
} /* 激活时变长条 */

.category-title {
  text-align: center;
  color: #6e8569;
  margin-bottom: 20px;
  font-size: 18px;
}

/* 列表结果 */
.result-list {
  min-height: 300px;
}

.list-item {
  background: #f0f2ef;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}
.list-item:active {
  transform: scale(0.98);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #8fa889;
  flex-shrink: 0;
  background: white;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-lines {
  flex: 1;
}
.line-title {
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 6px;
}
.line-sub {
  width: 60%;
  height: 8px;
  background: #8fa889;
  border-radius: 4px;
  opacity: 0.4;
}

.pill-tag {
  width: 40px;
  height: 12px;
  background: #c4c4c4;
  border-radius: 6px;
  opacity: 0.6;
}

/* 简单的淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
