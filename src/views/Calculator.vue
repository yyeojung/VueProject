<template>
    <div>
        <!-- 방법1 -->
        <h2>calculator</h2>
        <div>
            <input type="number" v-model="num1_a" @keyup="plusNumA">
            <span> + </span>
            <input type="number" v-model="num2_a" @keyup="plusNumA">
            <span> = </span>
            <span>{{ result_a }}</span>
        </div>

        <!-- 방법2 -->
        <h2>calculator(reactive 사용)</h2>
        <div>
            <input type="number" v-model="state.num1" @keyup="plusNum">
            <span> + </span>
            <input type="number" v-model="state.num2" @keyup="plusNum">
            <span> = </span>
            <span>{{ state.result }}</span>
        </div>

        <!-- 방법3 -->
        <h2>calculator(reactive, computed 사용)</h2>
        <div>
            <input type="number" v-model="stateB.num1B">
            <span> + </span>
            <input type="number" v-model="stateB.num2B">
            <span> = </span>
            <span>{{ stateB.resultB }}</span>
        </div>

        <!-- 방법4 -->
        <h2>calculator(reactive, computed, toRefs 사용)</h2>
        <div>
            <input type="number" v-model="refNum1">
            <span> + </span>
            <input type="number" v-model="refNum2">
            <span> = </span>
            <span>{{ refResult }}</span>
        </div>

    </div>
</template>

<script>
import {plusCalculatorRef} from '../common.js' //방법4
import { computed, reactive } from 'vue'; //방법2
export default {
    name: 'calculator',
    // 방법1
    data() {
        return {
            num1_a: 0,
            num2_a: 0,
            result_a: 0,
        };
    },
    methods: {
        plusNumA() {
            this.result_a = parseInt(this.num1_a) + parseInt(this.num2_a);
        }
    },

    // 방법2
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: 0
        });
        //방법3
        let stateB = reactive({
            num1B: 0,
            num2B: 0,
            resultB: computed(() => parseInt(stateB.num1B) + parseInt(stateB.num2B)),
        });
        //방법4
        let {refNum1, refNum2, refResult} = plusCalculatorRef();
        function plusNum() {
            state.result = parseInt(state.num1) + parseInt(state.num2);
        }
        return {
            state,
            plusNum,
            stateB,
            refNum1, 
            refNum2,
            refResult
        }
    }
}
</script>

<style>
h2 {margin-top: 60px;}
</style>