<template>
    <div>
        <p>one</p>
        <slot></slot>
        <p>two</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type:String,
            default: 'default title',
            required: false
        }
    },
    data() {
        return {name: "yeojung"}
    },
    methods: {
        updateName() {
            this.name = "yyyyy update"
        }
    }
}
</script>

<style>

</style>