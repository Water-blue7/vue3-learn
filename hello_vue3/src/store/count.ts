import { defineStore } from "pinia";

// 分别暴露
export const useCountStore = defineStore('count', {
    // 正真存储数据的地方
    state() {
        return {
            sum: 1,
            school: 'beida',
            address: '北京'
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },
        // upperSchool(state) {
        upperSchool(): string {
            // 也可以用this
            // console.log('@@@', this);
            // return state.school.toUpperCase()
            return this.school.toUpperCase()
        },
        // 也可以写成箭头函数，但是不能使用this
        smallSum: state => state.sum / 10
    }
})