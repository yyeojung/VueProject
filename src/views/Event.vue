<template>
    <div>
        <h2>숫자 카운팅</h2>
        <button type="button" @click="increaseCounter">add</button>     
        <span>counter : {{ counter }}</span>
    </div>
    <div>
        <h2>클릭 이벤트</h2>
        <input v-model="inputValue" type="text">
        <button @click="btnClick">클릭</button>
        <p>클릭 결과: {{ resultValue }}</p>
    </div>
    <div>
        <h2>엔터 이벤트</h2>
        <p>{{aa}}</p>
        <input type="text" @keyup.enter="keyEnter($event)">
    </div>
    <div>
        <h2>computhed</h2>
        <p>full name: {{fullName}}</p>
    </div>
    <div>
        <h2>watch</h2>
        <p>full name: {{fullName02}}</p>
        <button @click="changeName">클릭</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            inputValue:'',
            resultValue:'',
            firstName: 'Yeojung',
            lastName: 'Hong',
            fullName02: ''
        };
    },
    methods: { //호출하는 이벤트가 필요함
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        btnClick() {
            this.resultValue = this.inputValue
        },
        keyEnter(event) {
            const value = event.target.value;
            alert(value);
        },
        changeName() {
            this.firstName = "hahaha"
        }
    },
    computed: { //호출하지 않아도 자동으로 반환 ex) 환율 계산 등등
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        aa() {
            return '테스트 테스트'
        }
    },
    watch: {//요소의 변화가 일어나서 완전히 fix됐을 때 ex)회원가입 폼
        firstName() {
            this.fullName02 = this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style>
</style>