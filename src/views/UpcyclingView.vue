<script setup>
import { useRouter } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
const router = useRouter();

const ideas = [
  {
    id: 101,
    title: "Tote Bag",
    img: "https://images.unsplash.com/photo-1590874102058-592535d7885e?w=400&q=80"
  },
  {
    id: 102,
    title: "Cushion Cover",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&q=80"
  },
  {
    id: 103,
    title: "Pet Toy",
    img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80"
  },
  {
    id: 104,
    title: "Tie Dye",
    img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&q=80"
  }
];
</script>

<template>
  <div class="page-content">
    <div class="nav-bar">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" />
      </button>
      <h2>Upcycling Guide</h2>
      <div style="width: 24px"></div>
    </div>

    <div class="masonry-grid">
      <div
        v-for="idea in ideas"
        :key="idea.id"
        class="grid-card"
        @click="router.push(`/detail/${idea.id}`)"
      >
        <div class="img-wrapper">
          <img :src="idea.img" loading="lazy" />
        </div>
        <div class="card-footer">
          <span>{{ idea.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 20px 24px;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.back-btn {
  padding: 8px;
  margin-left: -8px;
}

.masonry-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.grid-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform 0.2s;
}
.grid-card:active {
  transform: scale(0.97);
}
.img-wrapper {
  width: 100%;
  height: 160px;
  background: #eee;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-footer {
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: var(--text-main);
}
</style>
