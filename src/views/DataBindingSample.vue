<template>
  <div class="top">
    <div>
        <h2>input-text</h2>
        <input type="text" v-model="valueModel"/>
        <p>{{ valueModel }}</p>
    </div>
    <div>
        <h2>button disabled</h2>
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>
    <div>
        <h2>input-num</h2>
        <input type="number" v-model.number="numberModel"/>
    </div>
    <div>
        <h2>textarea</h2>
        <textarea v-model="message"></textarea>
    </div>
    <div>
        <h2>select</h2>
        <select v-model="city">
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">제주</option>
        </select>
    </div>
    <div>
        <h2>checkbox</h2>
        <label><input type="checkbox" value="서울" v-model="checked">서울</label>
        <label><input type="checkbox" value="제주" v-model="checked">제주</label>
        <label><input type="checkbox" value="부산" v-model="checked">부산</label>
        <p>체크한 지역: {{ checked }}</p>
    </div>
    <div>
        <h2>radio</h2>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>  <!-- 그냥 value로 하면 이벤트 못함 -->
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked">구로</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked">안양</label>
        <p>선택한 지역: {{ picked }}</p>
    </div>
    <div>
        <h2>class</h2>
        <p 
            class="container"
            v-bind:class="{
                'active': isActive,
                'text-red': hasError
            }"
        >
        클래스 적용
        </p>
    </div>
    <div>
        <h2>class(배열)</h2>
        <p 
            class="container"
            v-bind:class="[activeClass, errorClass]"
        >
        클래스 적용
        </p>
    </div>
    <div>
        <h2>인라인 스타일  바인딩</h2>
        <p v-bind:style="style">뷰뷰븁뷰</p>
    </div>
    <div>
        <h2>인라인 스타일  바인딩 (배열)</h2>
        <p v-bind:style="[inlineStyle01,inlineStyle02]">뷰뷰븁뷰</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            valueModel: 'south korea',
            numberModel: 2,
            message: 'textarea입니다.',
            city: '03',
            checked: [],
            picked:'',
            radioValue1: '서울',
            radioValue2: '구로',
            radioValue3: '안양',
            textValue: "",
            isActive:true,
            hasError:false,
            activeClass: 'active',
            errorClass: 'text-red',
            style: {
                color: 'blue',
                fontSize: '16px'
            },
            inlineStyle01: 'background:yellow; width:100px; height:100px;',
            inlineStyle02: 'color:red; font-weight:bold'
        }
    }
}
</script>

<style>
.top > div {margin-top: 50px;}
.active {background:yellow; font-weight: bold;}
.text-red {color:red;}
</style>