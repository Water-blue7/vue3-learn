<template>
  <div id="app">
    <Person v-if="isShow" />
  </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    Person
  },
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style></style>
