import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)

    // 模拟用户信息
    const user = ref({
        name: 'Anna',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        uploadCount: 222,
        joinDate: 'December 2024'
    })

    const login = () => { isLoggedIn.value = true }
    const logout = () => { isLoggedIn.value = false }

    return { isLoggedIn, user, login, logout }
})