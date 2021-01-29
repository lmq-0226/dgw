<template>
  <div id="app">
    <Dnav></Dnav>
    <router-view/>
  </div>
</template>

<script>
import Dnav from "@/comment/nav/index.vue"
export default {
  components:{
    Dnav
  },
  name: 'App'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
</style>
