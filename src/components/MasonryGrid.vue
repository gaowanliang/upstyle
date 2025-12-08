<script setup>
import { Heart, User } from "lucide-vue-next";
import { useRouter } from "vue-router";

const props = defineProps({
  items: Array,
  // 新增：是否强制点亮爱心 (用于收藏页)
  isLiked: {
    type: Boolean,
    default: false
  }
});

const router = useRouter();

const goToDetail = (id) => {
  // 假设跳转到详情页，这里用通用详情路由
  router.push(`/detail/${id}`);
};
</script>

<template>
  <div class="masonry-wrapper">
    <div
      v-for="item in items"
      :key="item.id"
      class="masonry-card"
      @click="goToDetail(item.id)"
    >
      <div class="image-box">
        <img :src="item.img" loading="lazy" />
        <div class="overlay">
          <!-- 如果是收藏页(isLiked=true)，填充红色；否则描边白色 -->
          <Heart
            :size="16"
            :fill="isLiked ? '#e91e63' : 'none'"
            :color="isLiked ? '#e91e63' : 'white'"
          />
        </div>
      </div>
      <div class="card-info">
        <div class="user-row">
          <User :size="12" class="icon" />
          <span>{{ item.user }}</span>
        </div>
        <p class="title">{{ item.title }}</p>
        <!-- 新增标题显示 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.masonry-wrapper {
  column-count: 2;
  column-gap: 16px;
}

.masonry-card {
  break-inside: avoid;
  background: white;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
}
.masonry-card:active {
  transform: scale(0.98);
}

.image-box {
  position: relative;
}
.image-box img {
  width: 100%;
  display: block;
  border-radius: 16px 16px 0 0;
}
.overlay {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding: 6px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  display: flex;
}

.card-info {
  padding: 10px;
}
.user-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #888;
  margin-bottom: 4px;
}
.title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #333;
}
.icon {
  color: #8fa889;
}
</style>
