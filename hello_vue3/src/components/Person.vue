<template>
    <div class="person">
        ???
    </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from '@/types'

// PersonInter：规定了对象的属性类型
let person: PersonInter = { id: 'asdgasgbioadg01', name: 'zhang-san', age: 18 }

let personList: Persons = [
    { id: 'asdgasgbioadg01', name: 'zhang-san', age: 18 },
    { id: 'asdgasgbioadg02', name: 'li-si', age: 19 },
    { id: 'asdgasgbioadg03', name: 'wang-wu', age: 28 }
]
console.log(personList);

</script>

<style scoped>
.person {
    background-color: #d34343;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

ul {
    font-size: 20px;
}
</style>