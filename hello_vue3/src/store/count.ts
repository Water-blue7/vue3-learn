import { defineStore } from "pinia";

// 分别暴露
export const useCountStore = defineStore('count', {
    // 正真存储数据的地方
    state() {
        return {
            sum: 6
        }
    }
})