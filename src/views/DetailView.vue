<script setup>
import { useRoute, useRouter } from "vue-router";
import { ArrowLeft, Heart, MessageCircle, Share2, Star } from "lucide-vue-next";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const id = route.params.id;

// 为了让每次点击看起来不一样，我们用 id 做一个简单的随机映射
const getRandomImage = (id) => `https://picsum.photos/600/800?random=${id}`;
const getRandomTitle = (id) => {
  const titles = [
    "Summer Styling Guide",
    "How to Upcycle Denim",
    "The Perfect Tote Bag",
    "Vintage Jacket Restoration"
  ];
  return titles[id % titles.length] || "Sustainable Fashion";
};
</script>

<template>
  <div class="detail-page">
    <!-- 顶部大图 (Parallax effect) -->
    <div class="image-header">
      <img :src="getRandomImage(id)" class="bg-img" />

      <!-- 返回按钮 -->
      <button class="back-btn" @click="router.back()">
        <ArrowLeft color="#333" :size="24" />
      </button>
    </div>

    <!-- 内容卡片 (从底部升起) -->
    <div class="content-sheet">
      <div class="sheet-handle"></div>

      <div class="header-row">
        <div>
          <h1 class="title">{{ getRandomTitle(id) }}</h1>
          <div class="rating">
            <div class="stars">
              <Star
                :size="14"
                fill="#F5A623"
                color="#F5A623"
                v-for="i in 4"
                :key="i"
              />
              <Star :size="14" fill="#E2E8F0" color="#E2E8F0" />
            </div>
            <span class="score">4.2 (120 reviews)</span>
          </div>
        </div>
        <button class="like-btn">
          <Heart :size="24" color="#8FA889" />
        </button>
      </div>

      <div class="action-bar">
        <div class="action-item"><Heart :size="20" /> Like</div>
        <div class="action-item"><MessageCircle :size="20" /> Comment</div>
        <div class="action-item"><Share2 :size="20" /> Share</div>
      </div>

      <div class="divider"></div>

      <div class="article-body">
        <h3>Description</h3>
        <p>
          This is a detailed guide on how to achieve this look. Sustainable
          fashion is not just a trend, it's a lifestyle. In this tutorial (ID:
          {{ id }}), we will explore the best materials to use for upcycling.
        </p>
        <p>
          <strong>Step 1:</strong> Gather your materials.<br />
          <strong>Step 2:</strong> Measure twice, cut once.<br />
          <strong>Step 3:</strong> Stitch with care.
        </p>
        <div class="dummy-lines">
          <div class="line" style="width: 90%"></div>
          <div class="line" style="width: 95%"></div>
          <div class="line" style="width: 80%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  background: white;
  min-height: 100vh;
  position: relative;
}

.image-header {
  height: 50vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-sheet {
  position: relative;
  margin-top: 45vh;
  z-index: 1;
  background: white;
  border-radius: 32px 32px 0 0;
  padding: 24px;
  min-height: 60vh;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

.sheet-handle {
  width: 40px;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin: 0 auto 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.title {
  margin: 0 0 8px;
  font-size: 24px;
  color: var(--text-main);
  line-height: 1.2;
}
.rating {
  display: flex;
  align-items: center;
  gap: 8px;
}
.stars {
  display: flex;
  gap: 2px;
}
.score {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 600;
}

.like-btn {
  width: 50px;
  height: 50px;
  background: #f0f2ef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.action-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted);
}

.divider {
  height: 1px;
  background: #f0f0f0;
  margin: 0 -24px 24px;
}

.article-body h3 {
  font-size: 18px;
  margin-bottom: 12px;
  color: var(--text-main);
}
.article-body p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.dummy-lines .line {
  height: 10px;
  background: #f0f0f0;
  margin-bottom: 8px;
  border-radius: 5px;
}
</style>
