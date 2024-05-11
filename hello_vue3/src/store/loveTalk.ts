import { defineStore } from "pinia";
import axios from 'axios';
import { nanoid } from 'nanoid'

// 分别暴露
export const useLoveTlakStore = defineStore('loveTalk', {
    actions: {
        async getATalk() {
            // 发请求，下面这行的写法是：连续解构赋值+重命名
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 把请求回来的字符串，包装成一个对象
            let obj = { id: nanoid(), title }
            // 放到数组中
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            // JSON.parse：解析localStorage中的数据
            // 从localStorage中key为talkList中取数据
            // 防止用户第一次访问时localStorage中是空白的，null.unshift会报错，所以加一个空数组
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})