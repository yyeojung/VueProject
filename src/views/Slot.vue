<template>
    <SlotModal>
        <template #header>
            <h1>title</h1>
        </template>
        <template v-slot:default>
            <p>contents</p>
            <p>contents</p>
        </template>
        <template v-slot:footer>
            <button>close</button>
        </template>
    </SlotModal>
    <div>
        <h1>home page</h1>
        <p>{{ name }}</p>
        <SlotTemplate>
            <div>
                <p>hello</p>
            </div>
        </SlotTemplate>
    </div>
</template>

<script>
import SlotModal from "../components/SlotModal.vue"
import SlotTemplate from "../components/SlotTemplate.vue"
export default {
    components: {SlotModal, SlotTemplate},
    data() {
        return {
            name: "이름 추가"
        }
    }
}
</script>

<style>
</style>