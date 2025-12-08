<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const auth = useAuthStore();
const isLogin = ref(true); // 控制是登录还是注册

const handleAuth = () => {
  // 无论输入什么，直接登录成功
  auth.login();
  router.push("/profile");
};
</script>

<template>
  <div class="login-container">
    <div class="content-box">
      <!-- 1. Logo -->
      <div class="logo-area">
        <img src="@/assets/logo.png" alt="Logo" style="width: 120px;" />
      </div>

      <!-- 2. 标题 -->
      <h2 class="title">
        {{ isLogin ? "Log in to your account" : "Create an account" }}
      </h2>

      <!-- 3. 表单区域 -->
      <div class="form-group">
        <div class="input-wrapper">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>

        <!-- 注册时多显示一个 Email -->
        <div class="input-wrapper" v-if="!isLogin">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div class="input-wrapper">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
      </div>

      <!-- 记住我 (仅登录) -->
      <div class="options" v-if="isLogin">
        <label class="checkbox"> <input type="checkbox" /> Remember me </label>
      </div>

      <!-- 4. 按钮 -->
      <button class="primary-btn" @click="handleAuth">
        {{ isLogin ? "Log In" : "Sign Up" }}
      </button>

      <!-- 5. 切换模式 -->
      <p class="switch-mode">
        {{ isLogin ? "New to UpStyle?" : "Already have an account?" }}
        <span @click="isLogin = !isLogin">{{
          isLogin ? "Sign Up" : "Log In"
        }}</span>
      </p>

      <!-- 6. 社交登录 -->
      <div class="divider">or</div>
      <div class="socials">
        <button class="social-circle">f</button>
        <button class="social-circle">G</button>
        <button class="social-circle"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}
.content-box {
  width: 85%;
  max-width: 320px;
}

.logo-area {
  text-align: center;
  margin-bottom: 30px;
}
.logo-icon {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -1px;
}

.title {
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;
  color: var(--text-main);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}
.input-wrapper label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 6px;
  margin-left: 4px;
}
.input-wrapper input {
  width: 100%;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition: border 0.2s;
}
.input-wrapper input:focus {
  border-color: var(--primary);
}

.options {
  margin-bottom: 24px;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}

.primary-btn {
  width: 100%;
  padding: 16px;
  background: var(--primary);
  color: white;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(143, 168, 137, 0.3);
}

.switch-mode {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 30px;
}
.switch-mode span {
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: underline;
}

.divider {
  text-align: center;
  color: #cbd5e0;
  font-size: 12px;
  margin-bottom: 20px;
  position: relative;
}
.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #e2e8f0;
}
.divider::before {
  left: 0;
}
.divider::after {
  right: 0;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.social-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--text-main);
  transition: transform 0.2s;
}
.social-circle:active {
  transform: scale(0.95);
  background: #f0f0f0;
}
</style>
