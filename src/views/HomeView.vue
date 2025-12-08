<script setup>
import { useRouter } from "vue-router";
import { Sparkles, Recycle } from "lucide-vue-next";
const router = useRouter();
</script>

<template>
  <div class="page-content">
    <header class="header">
      <div class="text-group">
        <h1>Hello, Anna!</h1>
        <p>Style smarter. Waste less.</p>
      </div>
      <div class="logo-badge">UpStyle</div>
    </header>

    <!-- 核心展示区 -->
    <div class="hero-card">
      <div class="hero-image-container">
        <!-- 真实的高清白T恤图片 -->
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="White T-shirt"
        />
        <div class="floating-tag">
          <span>Current Item</span>
          <strong>White Essential Tee</strong>
        </div>
      </div>
    </div>

    <!-- 功能入口 -->
    <div class="action-grid">
      <div class="action-card green-card" @click="router.push('/styling')">
        <div class="icon-circle">
          <Sparkles :size="24" color="#fff" />
        </div>
        <div class="card-text">
          <h3>Styling Tips</h3>
          <span>3 new ideas today</span>
        </div>
      </div>

      <div class="action-card white-card" @click="router.push('/upcycling')">
        <div class="icon-circle ghost">
          <Recycle :size="24" color="#7A9A7E" />
        </div>
        <div class="card-text">
          <h3>Upcycling</h3>
          <span>DIY Guide</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 30px 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}
.header h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-main);
}
.header p {
  margin: 5px 0 0;
  color: var(--text-muted);
  font-size: 14px;
}
.logo-badge {
  font-weight: 800;
  color: var(--primary);
  font-size: 18px;
  letter-spacing: -0.5px;
}

.hero-card {
  margin-bottom: 30px;
  position: relative;
}
.hero-image-container {
  width: 100%;
  height: 320px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  position: relative;
}
.hero-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.floating-tag {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 10px 16px;
  border-radius: 12px;
}
.floating-tag span {
  display: block;
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.floating-tag strong {
  display: block;
  font-size: 14px;
  color: var(--text-main);
}

.action-grid {
  display: flex;
  gap: 16px;
}
.action-card {
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
}
.action-card:active {
  transform: scale(0.98);
}

.green-card {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-md);
}
.green-card .card-text h3 {
  color: white;
  margin: 0 0 4px 0;
  font-size: 16px;
}
.green-card .card-text span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

.white-card {
  background: white;
  border: 1px solid var(--primary-light);
}
.white-card .card-text h3 {
  color: var(--text-main);
  margin: 0 0 4px 0;
  font-size: 16px;
}
.white-card .card-text span {
  color: var(--text-muted);
  font-size: 12px;
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-circle.ghost {
  background: var(--primary-light);
}
</style>
