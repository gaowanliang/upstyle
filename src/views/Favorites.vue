<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import MasonryGrid from "../components/MasonryGrid.vue";

const router = useRouter();
const auth = useAuthStore();

// 鉴权
if (!auth.isLoggedIn) router.push("/login");

const activeTab = ref("styling");
const tabs = [
  { id: "inspection", label: "Inspection" },
  { id: "styling", label: "Styling tips" },
  { id: "upcycle", label: "Upcycle tutorials" }
];

// --- 不同类别的 Mock 数据 ---
const allData = {
  inspection: [
    {
      id: 1,
      user: "Admin",
      title: "Quality Check #22",
      img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300"
    },
    {
      id: 2,
      user: "Admin",
      title: "Material Scan",
      img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=300"
    }
  ],
  styling: [
    {
      id: 3,
      user: "Sarah",
      title: "Summer Vibe",
      img: "https://images.unsplash.com/photo-1603570784360-7c00ee305d5e?q=80&w=300"
    },
    {
      id: 4,
      user: "Mike",
      title: "Office Look",
      img: "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=300"
    },
    {
      id: 5,
      user: "Emma",
      title: "Party Dress",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300"
    }
  ],
  upcycle: [
    {
      id: 6,
      user: "EcoLife",
      title: "DIY Tote Bag",
      img: "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?w=300"
    },
    {
      id: 7,
      user: "Green",
      title: "Plant Pot",
      img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300"
    }
  ]
};

const currentItems = computed(() => allData[activeTab.value]);
</script>

<template>
  <div class="page-content">
    <h2 class="page-title">Favorites</h2>

    <!-- Tabs -->
    <div class="tabs-wrapper">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
        @click="activeTab = tab.id"
      >
        <div class="circle-indicator" :class="{ active: activeTab === tab.id }">
          <div class="inner-dot"></div>
        </div>
        <span :class="{ 'active-text': activeTab === tab.id }">
          {{ tab.label }}
        </span>
      </div>
    </div>

    <!-- 瀑布流：强制 isLiked=true -->
    <MasonryGrid :items="currentItems" :isLiked="true" />
  </div>
</template>

<style scoped>
.page-title {
  text-align: center;
  color: #8fa889;
  margin-bottom: 30px;
}

.tabs-wrapper {
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.circle-indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.circle-indicator.active {
  border-color: #8fa889;
}
.inner-dot {
  width: 0;
  height: 0;
  background: #8fa889;
  border-radius: 50%;
  transition: all 0.3s;
}
.circle-indicator.active .inner-dot {
  width: 14px;
  height: 14px;
}

.tab-item span {
  font-size: 12px;
  color: #888;
  transition: color 0.3s;
}
.tab-item span.active-text {
  color: #8fa889;
  font-weight: 600;
}
</style>
