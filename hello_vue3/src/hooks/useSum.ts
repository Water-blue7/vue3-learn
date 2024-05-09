import { ref, onMounted, computed } from 'vue'


export default function () {
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })

    onMounted(() => {
        sum.value += 100
    })

    function add() {
        sum.value += 1
    }

    // 向外部提供东西
    return { sum, add, bigSum }
}
