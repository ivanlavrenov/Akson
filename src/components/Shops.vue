<template>
    <ul class="list">
        <li class="item"
            v-for="shops in SHOPS"
            :key="shops.code"
            :code="shops.code"
            @click="setCurrentSelectedOption(shops), even()">
            {{ shops.name  }}
        </li>
    </ul>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Shops",
        computed: {
            ...mapGetters([
                'SHOPS'
            ])
        },
        props: ["config"],
        methods: {
            setCurrentSelectedOption(shops) {
                this.$emit("setSelectedOption", shops);
            },
            even() {
                this.$emit("setNumbers", localStorage.getItem("code"))
            },
        }
    }
</script>


<style>
    .item {
        display: flex;
        float: left;
        height: 25px;
        width: 158px;
        color: #333;
        font-size: 14px;
        margin-right: 30px;
    }

    .item:hover {
        color: #FF3030;
        transition: 0.3s;
    }

    .list {
        z-index: 2;
        width: 600px;
        height: 200px;
        max-height: 290px;
        float: left;
        padding: 0;
    }
</style>