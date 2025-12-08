<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";

const router = useRouter();
const activeCat = ref("Casual");
const categories = ["Casual", "Outdoor", "Professional", "Party"];

// 定义每个类别的详细数据
const allData = {
  Casual: [
    {
      id: 101,
      title: "Relaxed Denim Fit",
      sub: "Everyday comfort",
      img: "https://images.unsplash.com/photo-1685875018148-6ac6d41b7c4e?w=200"
    },
    {
      id: 102,
      title: "Classic White Tee",
      sub: "Wardrobe staple",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
    },
    {
      id: 103,
      title: "Oversized Hoodie",
      sub: "Cozy vibes",
      img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200"
    },
    {
      id: 104,
      title: "Canvas Tote Style",
      sub: "Practical & Chic",
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=200"
    }
  ],
  Outdoor: [
    {
      id: 201,
      title: "Waterproof Layers",
      sub: "Rain ready",
      img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=200"
    },
    {
      id: 202,
      title: "Hiking Boots Guide",
      sub: "Trail essentials",
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    },
    {
      id: 203,
      title: "Thermal Beanie",
      sub: "Keep warm",
      img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=200"
    },
    {
      id: 204,
      title: "Backpack Packing",
      sub: "Travel light",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200"
    }
  ],
  Professional: [
    {
      id: 301,
      title: "Structured Blazer",
      sub: "Office power",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200"
    },
    {
      id: 302,
      title: "Silk Scarf Knot",
      sub: "Elegant touch",
      img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=200"
    },
    {
      id: 303,
      title: "Tailored Trousers",
      sub: "Perfect fit",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200"
    },
    {
      id: 304,
      title: "Minimalist Watch",
      sub: "Timepiece",
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200"
    }
  ],
  Party: [
    {
      id: 401,
      title: "Velvet Dress",
      sub: "Night out",
      img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200"
    },
    {
      id: 402,
      title: "Statement Earrings",
      sub: "Bold accessories",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200"
    },
    {
      id: 403,
      title: "High Heels Hack",
      sub: "Comfort tips",
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200"
    },
    {
      id: 404,
      title: "Clutch Bag Pairing",
      sub: "Essential carry",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200"
    }
  ]
};

// 计算当前显示的列表
const currentItems = computed(() => allData[activeCat.value]);

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};
</script>

<template>
  <div class="page-content">
    <div class="nav-header">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#333" />
      </button>
      <h2>Get styling tips</h2>
      <div style="width: 24px"></div>
    </div>

    <!-- 类别筛选 -->
    <div class="category-row">
      <div
        v-for="cat in categories"
        :key="cat"
        class="cat-item"
        @click="activeCat = cat"
      >
        <div class="cat-circle" :class="{ active: activeCat === cat }">
          <div class="inner-dot" v-if="activeCat === cat"></div>
        </div>
        <span>{{ cat }}</span>
      </div>
    </div>

    <!-- 列表内容 (带动画) -->
    <div class="tips-list">
      <transition-group name="fade">
        <div
          class="list-card"
          v-for="item in currentItems"
          :key="item.id"
          @click="goToDetail(item.id)"
        >
          <div class="thumb">
            <img :src="item.img" />
          </div>
          <div class="info">
            <h4 class="item-title">{{ item.title }}</h4>
            <span class="item-sub">{{ item.sub }}</span>
          </div>
          <!-- 模拟开关/进入按钮 -->
          <div class="toggle-btn">
            <div class="toggle-pill"></div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.back-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 10px;
}
.cat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.cat-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f0f2ef;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border: 1px solid transparent;
}
.cat-circle.active {
  background: #8fa889;
  box-shadow: 0 4px 12px rgba(143, 168, 137, 0.3);
}
.inner-dot {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
}
.cat-item span {
  font-size: 12px;
  color: #888;
  font-weight: 500;
}
.cat-item:hover span {
  color: #8fa889;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-card {
  background: white;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s;
}
.list-card:active {
  transform: scale(0.98);
}

.thumb {
  width: 56px;
  height: 56px;
  background: #f0f2ef;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-title {
  margin: 0 0 4px;
  font-size: 15px;
  color: #2d3748;
}
.item-sub {
  font-size: 12px;
  color: #a0aec0;
}

.toggle-btn {
  width: 44px;
  height: 24px;
  background: #8fa889;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
}
.toggle-pill {
  width: 12px;
  height: 4px;
  background: white;
  border-radius: 2px;
  margin: 0 auto;
}

/* 简单的过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
