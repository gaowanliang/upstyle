import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// 引入所有页面
import GenericHome from '../views/GenericHome.vue'
import ProductHome from '../views/ProductHome.vue'
import SearchPage from '../views/SearchPage.vue' // 纯搜索页
import InspirationView from '../views/InspirationView.vue' // 新：灵感瀑布流
import StylingTips from '../views/StylingTips.vue' // 新：图一
import UpcyclingList from '../views/UpcyclingList.vue' // 新：图二
import DetailView from '../views/DetailView.vue'
import Login from '../views/Login.vue'
import Favorites from '../views/Favorites.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: GenericHome },
    { path: '/:id(\\d+)', name: 'product-home', component: ProductHome },

    // 搜索页 (从主页点击进入)
    { path: '/search', name: 'search', component: SearchPage },

    // 底部导航的新入口 (灵感)
    { path: '/inspiration', name: 'inspiration', component: InspirationView },

    // 商品页点击进入的列表页
    { path: '/styling-tips', name: 'styling-tips', component: StylingTips },
    { path: '/upcycling-list', name: 'upcycling-list', component: UpcyclingList },

    { path: '/detail/:id', name: 'detail', component: DetailView },
    { path: '/favorites', name: 'favorites', component: Favorites },
    { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: Login }
  ]
})

// 路由守卫保持不变
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) next('/login')
  else next()
})

export default router