<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import {
  UploadCloud,
  ChevronRight,
  Grid,
  Wallet,
  Settings,
  HelpCircle,
  LogOut
} from "lucide-vue-next";

const auth = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  auth.logout();
  router.push("/");
};
</script>

<template>
  <div class="page-content">
    <!-- 头部信息 -->
    <div class="profile-header">
      <div class="avatar-ring">
        <img :src="auth.user.avatar" />
      </div>
      <h2>{{ auth.user.name }}</h2>
      <span class="user-badge">Eco Stylist</span>
    </div>

    <!-- 统计信息 -->
    <div class="stats-container">
      <div class="stat-card upload-cta">
        <UploadCloud :size="32" />
        <span>Upload craft</span>
      </div>
      <div class="stat-card info-card">
        <span class="big-num">{{ auth.user.uploadCount }}</span>
        <div class="meta">
          <span>Uploaded since</span>
          <strong>{{ auth.user.joinDate }}</strong>
        </div>
      </div>
    </div>

    <!-- Posted Grid -->
    <div class="section-label">
      <h3>Posted</h3>
      <Grid :size="18" color="#8FA889" />
    </div>
    <div class="posted-grid">
      <div class="grid-item" v-for="n in 3" :key="n">
        <img :src="`https://picsum.photos/100/100?random=${n + 50}`" />
      </div>
    </div>

    <!-- 真实菜单列表 -->
    <div class="menu-list">
      <div class="menu-item">
        <div class="left">
          <div class="icon-box"><Wallet :size="18" color="#666" /></div>
          <span>My Wallet</span>
        </div>
        <ChevronRight color="#CBD5E0" :size="20" />
      </div>
      <div class="menu-item">
        <div class="left">
          <div class="icon-box"><Settings :size="18" color="#666" /></div>
          <span>Settings</span>
        </div>
        <ChevronRight color="#CBD5E0" :size="20" />
      </div>
      <div class="menu-item">
        <div class="left">
          <div class="icon-box"><HelpCircle :size="18" color="#666" /></div>
          <span>Help & Support</span>
        </div>
        <ChevronRight color="#CBD5E0" :size="20" />
      </div>
      <div class="menu-item" @click="handleLogout">
        <div class="left">
          <div class="icon-box red"><LogOut :size="18" color="#e53e3e" /></div>
          <span class="red-text">Log Out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}
.avatar-ring {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 3px;
  border: 2px dashed #8fa889;
  margin-bottom: 10px;
}
.avatar-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.user-badge {
  background: #e8efe9;
  color: #6e8569;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-top: 4px;
}

.stats-container {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.stat-card {
  flex: 1;
  height: 100px;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.upload-cta {
  background: white;
  border: 1px solid #8fa889;
  color: #8fa889;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(143, 168, 137, 0.1);
}
.info-card {
  background: #e8efe9;
  color: #6e8569;
}
.big-num {
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
}
.meta {
  font-size: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
}

.section-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  color: #8fa889;
}
.posted-grid {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}
.grid-item {
  flex: 1;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  background: #eee;
}
.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-item {
  background: white;
  padding: 14px;
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  cursor: pointer;
}
.left {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #333;
}
.icon-box {
  width: 32px;
  height: 32px;
  background: #f7f7f7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-box.red {
  background: #fff5f5;
}
.red-text {
  color: #e53e3e;
  font-weight: 600;
}
</style>
