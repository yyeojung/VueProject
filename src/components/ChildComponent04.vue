<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
    data() {
        return {
            msg: '자식 컴포넌트에서 보내는 메세지'
        }
    },
    mounted() {
        this.$emit('send-message', this.msg)
    }
}
</script>

<style>

</style>