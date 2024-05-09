import { reactive, onMounted } from 'vue'
import axios from 'axios'


export default function () {

    // 钩子
    // 完成挂载时直接获取一个狗
    onMounted(() => {
        getDog()
    })

    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6869.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_3601.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_4312.jpg'
    ])

    // axios：Ajax
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            // console.log(result.data.message);
            dogList.push(result.data.message)
        } catch (error) {
            alert(error);
        }
    }

    // 向外部提供东西
    return { dogList, getDog }
}