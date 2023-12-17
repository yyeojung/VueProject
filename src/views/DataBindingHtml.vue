<template>
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            htmlString: '<p style="color:red;">뷰뷰뷰뷰뷰뷰</p>'
        }
    }
}
</script>
