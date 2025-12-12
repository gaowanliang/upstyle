<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { ArrowLeft, Eye, EyeOff } from "lucide-vue-next";
import BrandLogo from "../components/BrandLogo.vue";

const router = useRouter();
const auth = useAuthStore();

// 状态控制
const isLogin = ref(true); // true = Log in, false = Sign up
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// 表单数据
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const keepSignedIn = ref(false);
const agreeTerms = ref(false);

const handleAuth = () => {
  // 简单模拟登录/注册成功
  auth.login();
  router.push("/");
};

// 切换模式时重置表单
const toggleMode = () => {
  isLogin.value = !isLogin.value;
  // 重置字段
  password.value = "";
  confirmPassword.value = "";
  agreeTerms.value = false;
};
</script>

<template>
  <div class="auth-page">
    <!-- 1. 顶部栏 (返回按钮 + Logo) -->
    <header class="top-bar">
      <button class="back-btn" @click="router.back()">
        <ArrowLeft :size="24" color="#1A202C" />
      </button>
      <div class="logo-wrapper">
        <BrandLogo :size="30" :showText="true" color="#5F7A63" />
      </div>
      <div class="placeholder"></div>
    </header>

    <div class="content-box">
      <!-- 2. 标题 -->
      <h1 class="page-title">{{ isLogin ? "Log in" : "Sign up" }}</h1>

      <!-- 3. 切换链接 -->
      <p class="subtitle">
        {{ isLogin ? "New to UpStyle?" : "Already have an account?" }}
        <span class="link-text" @click="toggleMode">
          {{ isLogin ? "Sign up" : "Log in" }}
        </span>
      </p>

      <!-- 4. 表单区域 -->
      <div class="form-group">
        <!-- User name (仅注册显示) -->
        <div class="input-field" v-if="!isLogin">
          <label>User name</label>
          <input
            v-model="username"
            type="text"
            placeholder="Please enter your user name"
          />
        </div>

        <!-- Email -->
        <div class="input-field">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Please enter your email"
          />
        </div>

        <!-- Password -->
        <div class="input-field">
          <label>Password</label>
          <div class="password-wrapper">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Please enter your password"
            />
            <button class="eye-btn" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="20" color="#A0AEC0" />
              <Eye v-else :size="20" color="#A0AEC0" />
            </button>
          </div>
        </div>

        <!-- Confirm Password (仅注册显示) -->
        <div class="input-field" v-if="!isLogin">
          <label>Confirm password</label>
          <div class="password-wrapper">
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Please confirm your password"
            />
            <button
              class="eye-btn"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <EyeOff v-if="showConfirmPassword" :size="20" color="#A0AEC0" />
              <Eye v-else :size="20" color="#A0AEC0" />
            </button>
          </div>
        </div>
      </div>

      <!-- 5. 选项行 (登录模式: Keep signed in & Forgot) -->
      <div class="options-row" v-if="isLogin">
        <label class="checkbox-container">
          <input type="checkbox" v-model="keepSignedIn" />
          Keep me signed in
        </label>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>

      <!-- 6. 服务条款 (登录和注册都有，根据设计图) -->
      <div class="terms-row">
        <label class="checkbox-container top-align">
          <input type="checkbox" v-model="agreeTerms" />
          <span class="terms-text">
            I accept the UpStyle
            <span class="link-green">Terms of Service</span> and have read the
            <span class="link-green">Privacy Policy</span>.
          </span>
        </label>
      </div>

      <!-- 7. 按钮 -->
      <button class="primary-btn" @click="handleAuth">
        {{ isLogin ? "Log in" : "Sign up" }}
      </button>

      <!-- 8. 分割线 -->
      <div class="divider">
        <span>or</span>
      </div>

      <!-- 9. 社交登录 -->
      <div class="social-row">
        <!-- Facebook -->
        <button class="social-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.429C10.125 6.422 11.917 4.761 14.656 4.761C15.968 4.761 17.344 4.995 17.344 4.995V7.948H15.83C14.34 7.948 13.875 8.873 13.875 9.821V12.073H17.203L16.67 15.563H13.875V24C19.612 23.094 24 18.1 24 12.073Z"
              fill="#1877F2"
            />
          </svg>
        </button>
        <!-- Google -->
        <button class="social-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M23.52 12.273C23.52 11.426 23.447 10.663 23.313 9.936H12V14.582H18.472C18.182 16.084 17.319 17.364 16.036 18.218V21.22H19.909C22.179 19.13 23.52 16.036 23.52 12.273Z"
              fill="#4285F4"
            />
            <path
              d="M12 24C15.24 24 17.954 22.924 19.916 21.22L16.043 18.218C14.966 18.941 13.585 19.345 12 19.345C8.869 19.345 6.221 17.234 5.275 14.394H1.275V17.494C3.256 21.425 7.329 24 12 24Z"
              fill="#34A853"
            />
            <path
              d="M5.275 14.394C5.031 13.667 4.896 12.894 4.896 12.095C4.896 11.296 5.031 10.523 5.275 9.796V6.696H1.275C0.465 8.303 0 10.147 0 12.095C0 14.043 0.465 15.888 1.275 17.494L5.275 14.394Z"
              fill="#FBBC05"
            />
            <path
              d="M12 4.845C13.757 4.845 15.328 5.452 16.574 6.641L19.982 3.232C17.947 1.336 15.233 0.19 12 0.19C7.329 0.19 3.256 2.766 1.275 6.696L5.275 9.796C6.221 6.956 8.869 4.845 12 4.845Z"
              fill="#EA4335"
            />
          </svg>
        </button>
        <!-- Apple -->
        <button class="social-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.051 10.98C17.017 13.382 18.991 14.996 19.066 15.04C19.023 15.176 18.72 16.21 17.986 17.279C17.352 18.203 16.693 19.117 15.636 19.138C14.593 19.158 14.248 18.525 13.064 18.525C11.872 18.525 11.479 19.138 10.51 19.158C9.519 19.18 8.795 18.147 8.163 17.234C6.862 15.356 5.867 11.905 7.189 9.614C7.844 8.479 9.018 7.756 10.354 7.734C11.359 7.712 12.311 8.411 12.923 8.411C13.53 8.411 14.675 7.567 15.865 7.712C16.366 7.733 17.765 7.915 18.667 9.231C18.595 9.274 17.086 10.15 17.051 10.98ZM14.975 5.253C15.535 4.575 15.914 3.629 15.811 2.69C14.996 2.723 14.004 3.232 13.418 3.911C12.894 4.517 12.43 5.491 12.547 6.405C13.447 6.476 14.417 5.932 14.975 5.253Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: #ffffff;
  padding: 0 24px 40px 24px;
}

/* 1. Top Bar */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-top: 20px;
}
.back-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.logo-wrapper {
  display: flex;
  justify-content: center;
}
.placeholder {
  width: 40px;
}

.content-box {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

/* 2. Titles */
.page-title {
  font-size: 24px;
  color: #1a202c;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}
.subtitle {
  text-align: left;
  font-size: 14px;
  color: #718096;
  margin-bottom: 20px;
}
.link-text {
  color: #5f7a63;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 4px;
}

/* 4. Form Fields */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
.input-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input-field label {
  font-size: 14px;
  color: #2d3748;
  font-weight: 500;
}
.input-field input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #cfd9e0;
  border-radius: 12px;
  font-size: 15px;
  color: #2d3748;
  outline: none;
  background: white;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.input-field input:focus {
  border-color: #5f7a63;
}
.input-field input::placeholder {
  color: #a0aec0;
}

.password-wrapper {
  position: relative;
}
.eye-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* 5. Checkboxes */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
}
.checkbox-container input {
  width: 20px;
  height: 20px;
  border: 1px solid #cfd9e0;
  border-radius: 4px;
  accent-color: #5f7a63; /* 绿色勾选 */
}
.forgot-link {
  font-size: 13px;
  color: #5f7a63;
  font-weight: 600;
  text-decoration: underline;
}

/* 6. Terms (Special alignment) */
.terms-row {
  margin-bottom: 30px;
}
.top-align {
  align-items: flex-start;
} /* 复选框顶部对齐 */
.terms-text {
  font-size: 13px;
  line-height: 1.5;
  color: #2d3748;
}
.link-green {
  color: #5f7a63;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}

/* 7. Button */
.primary-btn {
  width: 100%;
  padding: 16px;
  background: #6e8569; /* 稍微深一点的鼠尾草绿 */
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(110, 133, 105, 0.3);
  transition: opacity 0.2s;
}
.primary-btn:active {
  opacity: 0.9;
}

/* 8. Divider */
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 0;
  color: #718096;
  font-size: 14px;
}
.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}
.divider span {
  padding: 0 16px;
}

/* 9. Socials */
.social-row {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>
