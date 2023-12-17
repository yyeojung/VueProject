<template>
  <div>
    <div>
      <img v-bind:src="imgSrc">
      <img :src="imgSrc"> <!-- v-bind생략가능 -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: "https://kr.vuejs.org/images/logo.png",
        }
    }
}
</script>

<style>
  div img {width: 50px;}
</style>