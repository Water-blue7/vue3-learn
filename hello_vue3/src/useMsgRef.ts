import { customRef } from 'vue';

export default function (initValue: string, delay: number) {
    // 使用vue提供的customRef定义响应式数据
    let timer: number
    // track:跟踪 trigger:触发
    let msg = customRef((track, trigger) => {
        return {
            // get:msg被读取时被调用
            get() {
                // console.log('get', msg2);
                // track()：告诉Vue数据msg很重要，要对msg进行持续关注，一旦msg变化就去更新
                track()
                return initValue
            },
            // set:msg被修改时被调用
            // value:就是被修改后的
            set(value) {
                clearTimeout(timer)
                // setTimeout:设置延迟
                timer = setTimeout(() => {
                    // console.log('set', value);
                    initValue = value
                    // trigger()：通知Vue数据msg变化了
                    trigger()
                }, delay);
            }
        }
    })
    return {msg}
}