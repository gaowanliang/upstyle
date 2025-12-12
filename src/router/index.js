import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// 引入所有页面
import GenericHome from '../views/GenericHome.vue'
import ProductHome from '../views/ProductHome.vue'
import SearchPage from '../views/SearchPage.vue'
import InspirationView from '../views/InspirationView.vue'
import StylingTips from '../views/StylingTips.vue'
import UpcyclingList from '../views/UpcyclingList.vue'
import DetailView from '../views/DetailView.vue'
import Login from '../views/Login.vue'
import Favorites from '../views/Favorites.vue'
import Profile from '../views/Profile.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 1. 固定页面 (必须放在最前面)
    { path: '/', name: 'home', component: GenericHome },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/inspiration', name: 'inspiration', component: InspirationView },
    { path: '/styling-tips', name: 'styling-tips', component: StylingTips },
    { path: '/upcycling-list', name: 'upcycling-list', component: UpcyclingList },
    { path: '/favorites', name: 'favorites', component: Favorites },
    { path: '/login', name: 'login', component: Login },

    // 需要鉴权的页面
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { requiresAuth: true }
    },

    // 2. 带前缀的动态路由
    { path: '/detail/:id', name: 'detail', component: DetailView },

    // 3. 放在最后的“捕获所有 ID”路由 (Product Page)
    // 注意：去掉了 (\\d+)，现在 /abc123 也能访问
    // 必须放在最后，否则它会拦截 /search 或 /login 等页面
    {
      path: '/:id',
      name: 'product-home',
      component: ProductHome
    }
  ],
  // 切换页面时滚动条回顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router