<template>
  <div>
    <PageTitle title="ㅎㅎㅎ"/>
    <ChildComponent/>
    <ChildComponent @send-message="sendMessage" ref="child_component"/>
    <ChildComponent02 @send-message="sendMessage" ref="child_02"/>
    <ChildComponent03 @send-message="sendMessage" ref="child_03"/>
    <button type="button" @click="changeChildData">child_03변경</button>
    <ChildComponent04 />
    <div>
      <button @click="checkChild">자식 컴포넌트 데이터 조회</button>
      <ChildComponent05 ref="child_05"/>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent from '../components/ChildComponent.vue'
import ChildComponent02 from '../components/ChildComponent02.vue'
import ChildComponent03 from '../components/ChildComponent03.vue'
import ChildComponent04 from '../components/ChildComponent04.vue'
import ChildComponent05 from '../components/ChildComponent05.vue'
export default {
    components: {PageTitle, ChildComponent, ChildComponent02, ChildComponent03, ChildComponent04, ChildComponent05},
    mounted() {
        this.$refs.child_component.$refs.btn.click();
        this.$refs.child_02.callFromParent();
    },
    methods: {
        changeChildData() {
            this.$refs.child_03.msg = "변경한 메세지"
        },
        checkChild() {
          alert(this.msg);
        }
    },
    computed: {
      msg() {
        return this.$refs.child_05.msg;
      }
    }
}
</script>

<style>

</style>