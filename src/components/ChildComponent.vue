<template>
  
    <button type="button" @click="childFunc" ref="btn">클릭</button>
</template>

<script>
export default {
    methods: {
        childFunc() {
            console.log('부모 컴포넌트에서 발생시킨 이벤트')
        }
    }
}
</script>

<style>

</style>