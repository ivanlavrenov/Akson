<template>
    <div>
        <div class="menu_item categories" v-on:click="isActive=!isActive">
            <div class="close_img" v-if="isActive===false"></div>
            <div class="close_img_active" v-else></div>
            Все категории
        </div>

        <div v-show="isActive" class="categoty_list">
            <a href="https://akson.ru/sozday_sam/" class="category_item">
                Сделай сам
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Строительные материалы
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Пиломатериалы
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Водоснабжение, отопление
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Вентиляция
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Электротовары
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Скобяные изделия и крепёж
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Краски
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Инструменты
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Керамическая плитка
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Сантехника
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Отделка стен и потолков
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Напольные покрытия
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Двери и окна, лестницы
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Системы хранения
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Освещение
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Мебель
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Интерьер и декор
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Бытовая техника
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Автотовары
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Отдых и хобби
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Товары для дома
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Товары для сада
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
            <a class="category_item">
                Умный дом
                <img src="../img/chevron-right-white.svg" class="categoty_item_arrow">
            </a>
        </div>
    </div>
</template>


<script>
    export default {
        name: "category",
        data() {
            return {
                isActive: false
            };
        },

    }
</script>


<style>
    .categoty_list {
        position: absolute;
        width: 286px;
        padding-top: 5px;
        height: auto;
        background-color: #ffffff;
        border-radius: 0 0 2px 2px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
        border-right: 1px solid #D5D7DC;
        z-index: 1;
    }

    .category_item {
        position: relative;
        padding-left: 15px;
        font-size: 14px;
        line-height: 27px;
        padding: 4px 8px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        color: #333333;
    }

    .category_item:hover {
        background-color: #800080;
        color: #fff;
    }

    .categoty_item_arrow {
        opacity: 0;
        display: flex;

    }

    .category_item:hover .categoty_item_arrow {
        opacity: 1;
    }

    .categories {
        font-size: 15px;
        font-weight: 600;
    }

    .close_img{
        background-image: url("../img/menu.svg");
        width: 20px;
        height: 15px;
        margin-right: 5px;
    }

    .close_img_active{
        background-image: url("../img/closer_menu.svg");
        width: 14px;
        height: 15px;
        margin-right: 11px;
    }


</style>