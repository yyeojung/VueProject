<template>
    <div>
        <h2>v-for table</h2>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2>v-if</h2>
        <h2>v-show</h2>
        <p v-if="type=='a'">v-if는 조건에 맞는 것만 가져옴/ == 두개 이상 써야 조건 성립</p>
        <p v-show="bShow">v-show는 다 가져옴</p>
        <p>자주 토글이 일어나면 v-show, 토글이 일어나는 빈도가 작다면 v-if</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productList: [
                {"product_name": "키보드", "price": 2000, "category": "노트북", "delivery_price": 4000},
                {"product_name": "아이패드", "price": 500, "category": "노트북", "delivery_price": 300},
                {"product_name": "키보드", "price": 2500, "category": "노트북", "delivery_price": 5500},
                {"product_name": "키보드", "price": 230, "category": "노트북", "delivery_price": 65600}
            ],
            type: 'a',
            bShow: true
        }
    }
}
</script>
<style>
    table {border-collapse: collapse; width:100%;}
    td, th {border:1px solid #ddd; padding:8px;}
</style>