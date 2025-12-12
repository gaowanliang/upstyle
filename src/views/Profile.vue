<script setup>
import { useRouter } from "vue-router";
import { Settings, Plus, Pencil } from "lucide-vue-next"; // 需确保安装了图标库

const router = useRouter();

// 模拟“我的发布”数据
const myPosts = [
  {
    id: 1,
    title: "Denim tote",
    img: "https://images.unsplash.com/photo-1590874102058-592535d7885e?w=400&q=80",
    user: "Anna",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    title: "Denim Jacket Cuff with Sweater Patchwork",
    img: "https://images.unsplash.com/photo-1542272617-08f086303b96?w=400&q=80",
    user: "Anna",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    title: "Denim wallet",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80",
    user: "Anna",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Beginner friendly"
  }
];

const goToSettings = () => {
  router.push("/settings");
};

// 这里的 Create 按钮暂时不做实际跳转，仅作展示
const handleCreate = () => {
  console.log("Go to create page");
};
</script>

<template>
  <div class="page-content">
    <!-- 1. Header (Profile + Settings Icon) -->
    <header class="profile-header">
      <h1 class="page-title">Profile</h1>
      <button class="settings-btn" @click="goToSettings">
        <Settings :size="24" color="#5F7A63" />
      </button>
    </header>

    <!-- 2. User Info -->
    <div class="user-info">
      <div class="avatar-container">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Anna"
        />
      </div>
      <h2 class="user-name">Anna</h2>
      <p class="user-email">annataliawang@mail.com</p>
    </div>

    <div class="divider"></div>

    <!-- 3. My Posts Section Header -->
    <div class="posts-header">
      <h3>My posts</h3>
      <button class="create-btn" @click="handleCreate">Create</button>
    </div>

    <!-- 4. Posts Grid (Masonry) -->
    <div class="masonry-grid">
      <div v-for="item in myPosts" :key="item.id" class="grid-card">
        <div class="img-wrapper">
          <img :src="item.img" loading="lazy" />

          <!-- 编辑按钮 (右上角圆圈) -->
          <div class="edit-btn">
            <Pencil :size="16" color="#5F7A63" />
          </div>

          <!-- 标签 (如果有) -->
          <div v-if="item.badge" class="level-pill">{{ item.badge }}</div>
        </div>

        <div class="card-info">
          <div class="user-row">
            <img :src="item.avatar" class="avatar-tiny" />
            <span class="username">{{ item.user }}</span>
          </div>
          <h4 class="item-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  background: #fafafa;
  min-height: 100vh;
  padding: 0 24px 100px 24px;
}

/* Header */
.profile-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 10px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
}
.settings-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

/* User Info */
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.avatar-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 12px;
  border: 1px solid #e2e8f0;
}
.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-name {
  font-size: 18px;
  font-weight: 700;
  color: #5f7a63;
  margin: 0 0 4px 0;
}
.user-email {
  font-size: 14px;
  color: #4a5568;
  margin: 0;
}

.divider {
  height: 1px;
  background: #e2e8f0;
  margin-bottom: 24px;
}

/* Posts Header */
.posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.posts-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}
.create-btn {
  background: #6e8569;
  color: white;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(110, 133, 105, 0.3);
}

/* Masonry Grid (复用之前的样式) */
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
}
.img-wrapper {
  position: relative;
  background: #f4f4f4;
}
.img-wrapper img {
  width: 100%;
  display: block;
}

/* Edit Icon */
.edit-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.level-pill {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(232, 239, 233, 0.95);
  color: #5f7a63;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
}

.card-info {
  padding: 12px;
}
.user-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.avatar-tiny {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.username {
  font-size: 11px;
  color: #718096;
}
.item-title {
  font-size: 13px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1.3;
}
</style>
