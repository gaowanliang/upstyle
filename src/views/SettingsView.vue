<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import {
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  FileText,
  Lock,
  LogOut
} from "lucide-vue-next";

const router = useRouter();
const auth = useAuthStore();

const handleLogout = () => {
  auth.logout();
  router.push("/");
};
</script>

<template>
  <div class="settings-page">
    <!-- 1. Header -->
    <header class="nav-header">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <h1 class="page-title">Settings</h1>
      <div class="placeholder"></div>
    </header>

    <div class="list-container">
      <!-- 2. User Profile Card -->
      <div class="setting-item user-card">
        <div class="user-details">
          <h3 class="name">Anna</h3>
          <p class="email">annataliawang@mail.com</p>
        </div>
        <ChevronRight :size="20" color="#A0AEC0" />
      </div>

      <!-- 3. General Settings -->
      <div class="setting-item">
        <div class="item-left">
          <HelpCircle :size="20" color="#5F7A63" />
          <span>Help & Support</span>
        </div>
        <ChevronRight :size="20" color="#A0AEC0" />
      </div>

      <div class="setting-item">
        <div class="item-left">
          <FileText :size="20" color="#5F7A63" />
          <span>Terms of Service</span>
        </div>
        <ChevronRight :size="20" color="#A0AEC0" />
      </div>

      <div class="setting-item">
        <div class="item-left">
          <Lock :size="20" color="#5F7A63" />
          <span>Privacy Policy</span>
        </div>
        <ChevronRight :size="20" color="#A0AEC0" />
      </div>

      <!-- 4. Logout (Special Styling) -->
      <div class="setting-item logout-item" @click="handleLogout">
        <div class="item-left">
          <LogOut :size="20" color="#2D3748" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  background: #fafafa;
  min-height: 100vh;
  padding: 0 24px;
}

/* Nav Header */
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

/* List Container */
.list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Generic Item */
.setting-item {
  background: white;
  padding: 16px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  border: 1px solid #f7f7f7;
  cursor: pointer;
  transition: background 0.2s;
}
.setting-item:active {
  background: #f9f9f9;
}

/* User Card Specifics */
.user-card {
  padding: 20px;
  margin-bottom: 10px;
}
.name {
  font-size: 16px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 4px 0;
}
.email {
  font-size: 13px;
  color: #4a5568;
  margin: 0;
}

/* Icon + Text Group */
.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #2d3748;
}

/* Logout Specifics */
.logout-item {
  margin-top: 10px;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 10px 0;
}
.logout-item .item-left span {
  font-weight: 600;
  color: #2d3748;
}
</style>
