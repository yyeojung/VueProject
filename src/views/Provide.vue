<template>
    <h2>provide</h2>
    <ProvideChild/>
    <h2>api provide</h2>
    <CompositonApiProvide/>
</template>

<script>
import { provide } from 'vue';
import CompositonApiProvide from '../components/CompositonApiProvide.vue'
import ProvideChild from '@/components/ProvideChild.vue';
export default {
    components: {ProvideChild, CompositonApiProvide},
    setup() {
        provide('title', 'vue project')
    },
    data() {
        return {
            items: ['a','b']
        };
    },
    provide() {
        return {
            itemLength: this.items.length
        }
    }
}
</script>

<style>

</style>