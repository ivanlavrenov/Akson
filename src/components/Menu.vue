<template>
    <div class="menu_components_block">
        <div id="menu" class="city">
            <div class="title" v-on:click="active=!active">
                {{ config.title }}
            </div>
            <div v-show="active" class="dropdown_menu">
                <div class="menu_title">Ваш город {{ config.title }}</div>
                <input placeholder="Введите город" class="dropdown_search">
                <div class="switch" @click="isShowText">
                    <div class="switch_shops">
                        Наши магазины
                    </div>
                    <div class="switch_delivery">
                        Пункты выдачи заказа
                    </div>
                </div>
                <Shops
                        @setSelectedOption="setNewSelectedOption($event)"
                        v-if="!isShow1"
                        :config="config">
                </Shops>
                <Delivery
                        @setSelectedOption="setNewSelectedOption($event)"
                        v-if="!isShow2"
                        :config="config">
                </Delivery>
            </div>
        </div>
        <div class="number_block">
            <div class="number">
                {{ config.phone }}
            </div>
        </div>
    </div>

</template>


<script>
    import Shops from "@/components/Shops"
    import Delivery from "@/components/Delivery"
    import {mapActions, mapGetters} from "vuex"


    export default {
        name: "Menu",
        components: {
            Shops,
            Delivery
        },
        data() {
            return {
                isShow1: true,
                isShow2: false,
                active: false,
                config: {
                    title: "Москва",
                    phone: "+7 (495) 122-20-20"
                },
            };
        },
        computed: {
            ...mapGetters([
                'NUMBERS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_DELIVERY_FROM_API',
                'GET_SHOPS_FROM_API',
                'GET_NUMBERS_FROM_API'
            ]),
            setNewSelectedOption(shops, delivery) {
                this.config.title = shops.name || delivery.name;
                localStorage.setItem("code", shops.code || delivery.code)
                this.config.phone = shops.code || delivery.code;
            },

            isShowText() {
                this.isShow1 = !this.isShow1;
                this.isShow2 = !this.isShow2;
            },

        },
        mounted() {
                this.GET_DELIVERY_FROM_API(),
                this.GET_SHOPS_FROM_API(),
                this.GET_NUMBERS_FROM_API()
        }
    }
</script>

<style>
    .menu_components_block {
        display: flex;
        width: auto;
    }

    .city {
        width: auto;
        border-left: 1px solid #e1e1e1;
        margin: 0;
        padding: 0 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 35px;
        color: #666666;
        border-right: 1px solid #e1e1e1;
        position: relative;
        cursor: pointer;
    }

    .dropdown_menu {
        width: 600px;
        height: 400px;
        position: absolute;
        background: #ffffff;
        z-index: 2;
        box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        float: right;
        left: 0px;
        top: 38px;
        padding: 25px;
    }

    .title {
        margin: auto;
        width: auto;
        height: 36px;
    }

    .switch {
        margin-bottom: 20px;
        border-bottom: 1px solid #D7D7D7;
        display: flex;
    }

    .switch_active {
        border-bottom: 2px solid #D7D7D7;
    }

    .switch_shops {
        margin-right: 50px;
    }

    .menu_title {
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #333;
        margin-bottom: 20px;
    }

    .dropdown_search {
        padding: 0 12px;
        width: 400px;
        height: 56px;
        font-size: 16px;
        line-height: 22px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 22px;
    }

    .number_block {
        display: block;
        width: 125px;
        padding: 0 20px;
        font-size: 12px;
        font-weight: 400;
        line-height: 35px;
        color: #666666;
        border-right: 1px solid #e1e1e1;
    }

    .number {

        display: block;
        position: relative;
    }

</style>