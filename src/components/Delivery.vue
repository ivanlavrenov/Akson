<template>
    <ul class="list">
        <li class="item"
            v-for="delivery in DELIVERY"
            :key="delivery.code"
            :code="delivery.code"
            @click="setCurrentSelectedOption(delivery)">
            {{ delivery.name }}
        </li>
    </ul>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Delivery",
        computed: {
            ...mapGetters([
                'DELIVERY'
            ])
        },
        props: ["config"],
        methods: {
            setCurrentSelectedOption(delivery) {
                this.$emit("setSelectedOption", delivery);
            },
        }
    }
</script>


<style scoped>
    .list {
        display: block;
        position: relative;
        height: 200px;
        overflow-y: scroll;
    }

</style>