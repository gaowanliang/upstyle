import { ref } from 'vue'

// 全局共享的状态（为了让任何页面都能调用它）
const show = ref(false)
const message = ref('')
let timer = null

export function useSimpleToast() {
    const triggerToast = (msg) => {
        message.value = msg
        show.value = true

        // 2秒后自动消失
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            show.value = false
        }, 2000)
    }

    return { show, message, triggerToast }
}