<template>
    <div id="app">
        <div class="top_menu">
            <div class="menu_block">
                <div class="top_menu_list">
                    <Menu/>
                    <div class="list_item contact">
                        <a>Контакты и магазины</a>
                    </div>
                    <div class=" list_item wholesale">
                        <a>Оптовым клиентам</a>
                    </div>
                    <div class="list_item master">
                        <a>Мастера</a>
                    </div>
                    <div class="list_item bonus">
                        <a>Бонусная программа</a>
                    </div>
                    <div class="list_item help">
                        <a>Нужна помощь?</a>
                    </div>
                </div>
            </div>
        </div>
        <header>
            <div class="header_block">
                <a href="https://akson.ru/" class="logo_img header_item">
                    <img src="https://akson.ru/inc/reports_logo_animation/assets/A.svg" class="letter A"/>
                    <img src="https://akson.ru/inc/reports_logo_animation/assets/K.svg" class="letter K"/>
                    <img src="https://akson.ru/inc/reports_logo_animation/assets/S.svg" class="letter S"/>
                    <img src="https://akson.ru/inc/reports_logo_animation/assets/O.svg" class="letter O"/>
                    <img src="https://akson.ru/inc/reports_logo_animation/assets/N.svg" class="letter N"/>
                </a>
                <div class="header_input header_item">
                    <input placeholder="Я ищу.." class="microphone">
                    <div class="micro"></div>
                    <div class="search_block">
                        <input type="submit" class="search" value="">
                    </div>
                </div>
                <div class="header_item lk">
                    <a>Личный кабинет</a>
                </div>
                <div class="header_item plan">
                    <a>План покупок</a>
                </div>
                <div class="header_item bucket">
                    <a>Корзина</a>
                </div>
            </div>
        </header>

        <div class="menu">
            <div class="menu_block">
                <category/>
                <div class="menu_item stock">
                    Акции
                </div>
                <div class="menu_item">
                    Строительные материалы
                </div>
                <div class="menu_item">
                    Краски
                </div>
                <div class="menu_item">
                    Сантехника
                </div>
                <div class="menu_item">
                    Керамическая плитка
                </div>
                <div class="menu_item">
                    Товары для дома
                </div>
                <div class="menu_item garden">
                    Сад и огород
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div class="wrapper_header">
                Рекламные возможности <span class="wrapper_span">akson.ru</span>
            </div>
            <div class="wrapper_title">
                Аудитория сайта
            </div>

            <div class="wrapper_block">
                <div class="wrapper_main_block">
                    <div class="auditory">
                        <div class="auditory_header">
                            Посещаемость
                        </div>
                        <div class="auditory_block">
                            <img src="https://akson.ru/ad-offer/images/img101018/posech.jpg" class="auditory_img">
                            <div class="auditory_text">
                                <p class="text">
                                    <span class="auditory_span eye">73 млн</span>
                                    <br>
                                    Общее число просмотров страниц за 2018 год
                                </p>
                                <p class="text">
                                    <span class="auditory_span people">1,1 млн</span>
                                    <br>
                                    Средняя ежемесячная посещаемость сайта по данным SimilarWeb за 2018 год
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gender">
                        <div class="auditory_header">
                            Пол
                        </div>
                        <div class="auditory_block">
                            <img src="https://akson.ru/ad-offer/images/pol.jpg" class="gender_img">
                            <div class="gender_text_block">
                                <div class="left_point_block">
                                    <div class="point"></div>
                                    <p class="text gender_text"> Мужской</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point blue"></div>
                                    <p class="text gender_text">Женский</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="age">
                        <div class="auditory_header">
                            Возраст
                        </div>
                        <div class="auditory_block">
                            <img src="https://akson.ru/ad-offer/images/age.jpg" class="age_img">
                            <div class="age_text_block">
                                <div class="left_point_block">
                                    <div class="point green"></div>
                                    <p class="age_text">25-34 года</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point yellow"></div>
                                    <p class="age_text">35-44 года</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point red"></div>
                                    <p class="age_text">45-54 года</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point blue"></div>
                                    <p class="age_text">55 лет и старше</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point violet"></div>
                                    <p class="age_text">18-24 года</p>
                                </div>
                                <div class="left_point_block">
                                    <div class="point grey"></div>
                                    <p class="age_text">Остальные</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="wrapper">
                <div class="wrapper_title">10 областей</div>
                <div class="wrapper_title_text">Московская, Ярославская, Ивановская, Костромская, Владимирская,
                    Вологодская, Нижегородская, Калужская, Тамбовская, Смоленская
                </div>
            </div>
            <div class="map_block">
                <div class="map">
                    <div style="position:relative;overflow:hidden;"><a
                            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс.Карты</a><a
                            href="https://yandex.ru/maps/?from=api-maps&ll=37.210236%2C56.500083&origin=jsapi_2_1_74&pt=37.674984%2C55.722801~37.674984%2C55.722801~38.918656%2C56.741297~36.26281224121091%2C54.51372563960182~36.26281224121091%2C54.51372563960182~40.42147049999998%2C56.138330175994874~41.31122%2C56.363628~39.86692249999997%2C57.650721230284134~40.996693499999985%2C57.00858312487194~38.812502499999965%2C58.06143074830594&utm_medium=mapframe&utm_source=maps&z=7"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест и
                        адресов, городской транспорт</a>
                        <iframe src="https://yandex.ru/map-widget/v1/-/CCQpR8v1TC" width="1000" height="465"
                                frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                    </div>
                </div>
            </div>

            <div class="wrapper">
                <div class="wrapper_title">
                    Рекламные продукты
                </div>
                <div class="wrapper_title_text">
                    Мы предлагаем мощный пакет рекламных средств для продвижения вашего товара на фоне конкурентов.
                    Выберите удобный для Вас способ продвижения или комплекс мер.
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <img src="./img/main-big.png" class="left_screen">
                        <div class="right_text">
                            <div class="block_title">
                                Большой баннер
                                <br>
                                на главной странице
                            </div>
                            <p>Основным преимуществом данного баннера является его размер.<br>
                                Ваш баннер будет встречать покупателя сразу после входа на сайт.</p>
                            <p class="price">24 990 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 80 000 просмотров<br>
                                1180 Х 300 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <div class="left_text">
                            <div class="block_title">
                                Горизонтальный баннер
                                <br>
                                на главной странице
                            </div>
                            <p>Ваше предложение ВСЕГДА будет видно покупателю<br>
                                Для размещения доступен 1 баннер</p>
                            <p class="price">14 990 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 80 000 просмотров<br>
                                1180 Х 240 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                        <img src="./img/hor-ban.png" class="right_screen">
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <div class="left_text">
                            <div class="block_title">
                                Малый баннер
                                <br>
                                на главной странице
                            </div>
                            <p>Ваше предложение на главной странице.<br>
                                Для размещения доступны 2 баннера.</p>
                            <p class="price">12 490 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 80 000 просмотров<br>
                                580 Х 150 px без ротации</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                        <img src="./img/main-small.png" class="right_screen">
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <img src="./img/top-cat.png" class="left_screen">
                        <div class="right_text">
                            <div class="block_title">
                                Верхний баннер
                                <br>
                                в 1 уровне каталога
                            </div>
                            <p>Данная активность позволяет воздействовать
                                на достаточно узкую целевую аудиторию и выгодно анонсировать акции или конкретные
                                товары</p>
                            <p class="price">1 790 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 10 500 просмотров<br>
                                920 Х 90 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <img src="./img/top-cat-end.png" class="left_screen">
                        <div class="right_text">
                            <div class="block_title">
                                Верхний баннер
                                <br>
                                в конечном уровне каталога
                            </div>
                            <p>В данном разделе присутствует ТОЛЬКО целевая аудитория</p>
                            <p class="price">1 490 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 8 500 просмотров<br>
                                920 Х 90 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <div class="left_text">
                            <div class="block_title">
                                Баннер под фильтром
                                <br>
                                товаров
                            </div>
                            <p>Самый бюджетный вариант для размещения Вашего баннера.<br>
                                Отлично работает в разделах, где присутствует большое количество товаров.</p>
                            <p class="price">990 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 8 500 просмотров<br>
                                230 Х 400 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                        <img src="./img/under-fill.png" class="right_screen">
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <img src="./img/main-menu.png" class="left_screen">
                        <div class="right_text">
                            <div class="block_title">
                                Баннеры в главном
                                <br>
                                меню
                            </div>
                            <p>Ваш баннер будет отображаться при просмотре главного меню сайта - основного инструмента
                                воздействия с покупателем. К плюсам относится - охват большой аудитории.</p>
                            <p class="price">12 490 руб</p>
                            <p>Стоимость указана за 1 неделю размещения.<br>
                                Около 800 000 просмотров<br>
                                200 Х 226 px с ротацией</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="center_block">
                    <div class="center_block_wrapper">
                        <img src="./img/brend-zone.png" class="screen">
                        <div class="center_text">
                            <div class="center_block_title">
                                Бренд-зона на сайте akson.ru
                            </div>
                            <p>УНИКАЛЬНАЯ страница на сайте, создаваемая специально для Вас. На ней мы расскажем об
                                истории Вашего бренда, анонсируем запущенные акции, представим все преимущества товаров.
                                Фото и видео материалы, инструкции по применению, словом, всё то, что позволит
                                покупателю выбрать именно Ваш товар!</p>
                            <p class="center_price">59 990 руб</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="center_block">
                    <div class="center_block_wrapper">
                        <img src="./img/brend-sort.png" class="screen">
                        <div class="center_text">
                            <div class="center_block_title">
                                Бренд сортировка в каталоге
                            </div>
                            <p>Данная активность позволит Вашим продуктам ВСЕГДА находиться на первых местах в каталоге
                                товара, отодвигая продукты конкурентов на второй план.</p>
                            <p>Стоимость указана за 1 неделю до 70 шт.<br>
                                Более 70 товаров - 44 990.<br>
                                Данная активность позволит Вашим продуктам возглавлять список товаров.</p>
                            <p class="center_price">12 490 руб</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="center_block">
                    <div class="center_block_wrapper">
                        <img src="./img/block-reck.png" class="screen">
                        <div class="center_text">
                            <div class="center_block_title">
                                Блок рекомендованных товаров в корзине
                            </div>
                            <p>Это - лучшее предложение для сопутствующих товаров. Данная активность позволит получить
                                прирост по кросс-продажам до 35%.</p>
                            <p>Стоимость указана за 1 неделю, до 5 категорий товаров и до 12 товаров Вашего бренда.<br>
                                При добавлении товаров из определенных категорий в Корзину, рядом с кнопкой "Оформить
                                заказ" будет встраиваться блок,<br>
                                в котором будут отображаться товары Вашего бренда.</p>
                            <p class="center_price">12 490 руб</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <div class="block_wrapper">
                        <img src="./img/email.png">
                        <div class="right_text bot_block_text">
                            <div class="block_title">
                                E-mail рассылка
                            </div>
                            <p>Создание e-mail рассылок, предложение товарной<br> группы бренда по базе пользователей
                                Аксон.</p>
                            <p class="price">59 990 руб</p>
                            <p>Текущая база e-mail адресов - свыше 130 000 подписчиков</p>
                            <p class="block_button">Оставить заявку</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer_advantages">
            <div class="footer_advantages_container">
                <p class="footer_advantages_title">Почему Аксон?</p>
                <div class="footer_advantages_block">
                    <div class="footer_advantages_container">
                        <div class="footer_item first_advantage">
                            <span class="footer_span">Доставка за 4 часа</span><br>
                            Мы доставляем товары в течение 4 часов или в любой удобный для Вас день и время
                        </div>
                    </div>
                    <div class="footer_container">
                        <div class="footer_item second_advantage">
                            <span class="footer_span">Самовывоз через 30 минут</span><br>
                            Вы сможете забрать свой товар через 30 минут после оформления заказа
                        </div>
                    </div>
                    <div class="footer_container">
                        <div class="footer_item third_advantage">
                            <span class="footer_span">Сashback до 7%</span><br>
                            Возвращайте до 7% бонусами и оплачивайте ими до 99,9% стоимости заказа!
                        </div>
                    </div>
                    <div class="footer_container">
                        <div class="footer_item fourth_advantage">
                            <span class="footer_span">Возврат и обмен</span><br>
                            Осуществляем возврат товара в течение 120 дней с момента покупки!
                        </div>
                    </div>
                </div>
            </div>
            <img src="./img/annotation.png" class="annotation">
        </div>
        <footer>
            <div class="footer_container">
                <div class="footer_information_block">
                    <div class="question">
                        <p class="footer_title">Нужна помощь в выборе товара?</p>
                        <a class="number footer_hover">+7 (495) 122-20-20</a>
                        <p class="question_text"><span
                                class="question_span footer_hover">Рубрика вопросы и ответы</span> поможет вам найти
                            ответы на все основные вопросы, которые могут возникнуть при взаимодействии с ресурсом.</p>
                    </div>

                    <ul>
                        <li><p class="footer_title">Покупателю</p>
                        <li><a class="footer_link">Доставка</a></li>
                        <li><a class="footer_link">Акции</a></li>
                        <li><a class="footer_link">Оплата</a></li>
                        <li><a class="footer_link">Сервис и гарантия</a></li>
                    </ul>

                    <ul class="footer_list">
                        <li><a class="footer_link">Предложения</a></li>
                        <li><a class="footer_link">Жалобы</a></li>
                        <li><a class="footer_link">Услуги</a></li>
                    </ul>

                    <ul>
                        <li><p class="footer_title">Компания</p></li>
                        <li><a class="footer_link">Контакты и магазины</a></li>
                        <li><a class="footer_link">Бонусная программа</a></li>
                        <li><a class="footer_link">Отзывы</a></li>
                        <li><a class="footer_link">Вакансии</a></li>
                        <li><a class="footer_link">О компании</a></li>
                    </ul>

                    <ul>
                        <li><p class="footer_title">Партнерам</p></li>
                        <li><a class="footer_link">Поставщикам</a></li>
                        <li><a class="footer_link">Рекламодателям</a></li>
                        <li><a class="footer_link">Аренда площадей</a></li>
                    </ul>
                </div>
            </div>
            <div class="underfooter">
                <div class="underfooter_block">
                    <div>
                        Интернет гипермаркет Аксон. Все права защищены. © 1991-2020
                    </div>
                    <div>
                        <a class="underfooter_link footer_hover">Мобильная версия</a>
                        <a class="underfooter_link footer_hover">Оптовым клиентам</a>
                    </div>
                </div>

            </div>
        </footer>
    </div>
</template>


<script>
    import Category from '@/components/Category'
    import Menu from '@/components/Menu'


    export default {
        name: 'App',
        components: {
            Category,
            Menu
        },
        data() {
            return{
                config: {
                    number: "+7 (495) 122-20-20"
                }
            }
        },
        methods:{}
    }


</script>

<style>

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: 'Open Sans';
    }

    #app {
        display: block;
        width: 100%;
        height: 10000px;
    }

    .top_menu {
        position: relative;
        background-color: #f5f5f6;
        border-bottom: 1px solid #e1e1e1;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 36px;
    }

    .top_menu_list {

        display: flex;
        justify-content: center;
    }

    .list_item {
        margin: 0;
        padding: 0 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 35px;
        text-align: center;
        color: #666666;
        border-right: 1px solid #e1e1e1;
        position: relative;
        cursor: pointer;
    }

    .master:before {
        content: url("./img/masters.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 3px;
    }

    .bonus:before {
        content: url("./img/bonus.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 3px;
    }

    .help:before {
        content: url("./img/help.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 3px;
    }

    .letter {
    }

    .A {
        width: 36px;
        height: 31px;
    }

    .K {
        width: 33px;
        height: 31px;
    }

    .S {
        width: 26px;
        height: 31px;
    }

    .O {
        width: 33px;
        height: 31.5px;
        padding: 0 1px 0 1px;
    }

    .N {
        width: 30px;
        height: 31px;
    }

    header {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .header_block {
        width: 1180px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .header_input {
        display: flex;
    }

    .microphone {
        position: relative;
        left: 3px;
        width: 435px;
        padding-left: 10px;
        border: black 1px solid;
        height: 40px;
        border: 1px solid #bbbbbb;
        font-size: 14px;
        line-height: 44px;
        color: #333333;
        border-radius: 4px;
    }

    .micro {
        position: absolute;
    }

    .micro:before {
        content: url("./img/micro.svg");
        position: relative;
        top: 12px;
        left: 426px;
    }

    .search_block {
        background: #bbbbbb;
        width: 44px;
        height: 44px;
        border-radius: 4px;
        z-index: 1;
    }

    .search {
        width: 44px;
        height: 44px;
        background: url('https://akson.ru/inc/header/img/search.svg') no-repeat center;
        border: 0;
        outline: none;
        padding: 0;
        cursor: pointer;
    }

    .search:hover {
        background-color: #333333;
        -webkit-transition: All 0.3s ease 0s;
        transition: All 0.3s ease 0s;
        border-radius: 4px;
    }

    .header_item:hover {
        color: #ff0000;
        cursor: pointer;
        -webkit-transition: All 0.3s ease 0s;
        transition: All 0.3s ease 0s;
    }

    .phone:hover {
        color: #333333;
        cursor: pointer;
        -webkit-transition: All 0.3s ease 0s;
        transition: All 0.3s ease 0s;
    }

    .lk:before {
        content: url("./img/login.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 3px;
    }

    .plan:before {
        content: url("./img/estimate.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 5px;
    }

    .bucket:before {
        content: url("./img/cart.svg");
        width: 20px;
        position: relative;
        padding-right: 7px;
        top: 3px;
    }

    .header_item {
        margin-right: 35px;
        cursor: pointer;
        font-size: 15px;
    }

    .stock:before {
        content: url("./img/stocks.svg");
        width: 20px;
        padding-right: 5px;
        padding-top: 5px;
    }

    .bucket {
        margin-right: 0;
    }

    .menu {
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 50px;
    }

    .menu_block {
        display: flex;
        justify-content: space-between;
        min-width: 1180px;
        max-width: 1300px;
    }

    .menu_item {
        display: flex;
        height: 40px;
        align-items: center;
        margin-right: 15px;
        font-size: 13px;
        color: #666666;
        cursor: pointer;
    }

    .menu_item:hover {
        color: red;
        transition: 0.5s;
    }

    .garden {
        margin-right: 0;
    }

    .wrapper_header {
        font-size: 44px;
        font-weight: 600;
        text-align: center;
    }

    .wrapper_span {
        color: #ff000a;
    }

    .wrapper_title {
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        padding-top: 50px;
    }

    .wrapper_block {
        padding-top: 25px;
        display: flex;
        justify-content: center;
        font-weight: 400;
    }

    .wrapper_main_block {
        width: 1180px;
        display: flex;
        justify-content: space-around;
    }

    .auditory {
        width: 450px;
    }

    .gender {
        width: 250px;
    }

    .auditory_block {
        display: flex;
        justify-content: space-around;
    }

    .auditory_header {
        margin-bottom: 16px;
    }

    .auditory_span {
        font-size: 16px;
        font-weight: 600;
        right: 28px;
        position: relative;
    }

    .people:before {
        content: url("./img/people.png");
        width: 20px;
        position: relative;
        right: 5px;
        top: 4px;
    }

    .eye:before {
        content: url("./img/eye.png");
        width: 20px;
        position: relative;
        right: 5px;
        top: 2px;
    }

    .left_point_block {
        display: flex;
    }

    .point {
        position: relative;
        width: 10px;
        height: 10px;
        background-color: #FD5A3E;
        border-radius: 50%;
        top: 9px;
    }

    .blue {
        background-color: #77B6E7;
    }

    .green {
        background-color: #81AE56;
    }

    .red {
        background-color: #CF2F36;
    }

    .yellow {
        background-color: #FFD963;
    }

    .violet {
        background-color: #A955B8;
    }

    .grey {
        background-color: #F3F1ED;
    }

    .text {
        width: 200px;
        font-size: 13px;
    }

    .auditory_block {
        display: flex;
    }

    .auditory_header {
        font-size: 17px;
        text-align: center;
    }

    .auditory_img {
        margin-right: 15px;
    }

    .age_img {
        width: 160px;
        height: 160px;
        margin-right: 15px;
        padding-top: 15px;
    }

    .gender_text_block {
        position: relative;
        top: 40px;
        width: 70px;
    }

    .gender_text {
        width: 50px;
        margin: 5px;
    }

    .age_text {
        width: 120px;
        font-size: 13px;
        margin: 5px;
    }

    .age_text_block {
        position: relative;
        top: 10px;
    }

    .gender_img {
        padding-top: 10px;
    }

    .main {
        background-image: url('https://akson.ru/ad-offer/images/img101018/main.svg');
        width: 100%;
        padding-top: 150px;
    }

    .wrapper_title_text {
        width: 800px;
        text-align: center;
        margin: 30px auto;
    }

    .map_block {
        display: flex;
        justify-content: center;
    }

    .map {
        width: 1000px;
        height: 500px;
        border-radius: 2px;
        background-color: #ffffff;
        box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        box-sizing: border-box;
        padding: 15px;
        margin-bottom: 20px;
    }

    .block {
        display: flex;
        justify-content: center;
        padding-bottom: 75px;
    }

    .block_wrapper {
        width: 1180px;
        display: flex;
        justify-content: space-around;
    }

    .block_title {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #333333;
        line-height: 130%;
    }

    .right_text {
        width: 400px;
    }

    .price {
        margin-top: 30px;
        font-size: 48px;
        font-weight: 600;
        color: #333333;
        margin-bottom: 15px;
    }

    .block_button {
        background-color: #ff0000;
        color: white;
        font-size: 16px;
        width: 185px;
        text-align: center;
        height: 44px;
        border-radius: 4px;
        margin-top: 16px;
        cursor: pointer;
        font-weight: 600;
        line-height: 2.7;
    }

    .center_block {
        display: flex;
        justify-content: center;
    }

    .center_block_wrapper {
        width: 1180px;
        padding-bottom: 75px;
    }

    .screen {
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .center_text {
        width: 800px;
        margin: auto;
        margin-top: 40px;
    }

    .center_block_title {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #333333;
        line-height: 130%;
    }

    .center_price {
        margin-top: 30px;
        font-size: 48px;
        font-weight: 600;
        color: #333333;
        margin-bottom: 15px;
    }

    .bot_block_text {
        position: relative;
        top: 120px;
    }

    .footer_advantages_title {
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.8);
        display: flex;
        margin-bottom: 20px;
        margin-top: 0;
    }

    .footer_advantages_block {
        display: flex;
        justify-content: space-around;
    }

    .footer_advantages_container {
        width: 1180px;
        margin: auto;
    }

    .footer_advantages {
        font-style: normal;
        font-weight: normal;
        background-color: #F1F2F3;
        padding: 35px 0;
        position: relative;
        bottom: 105px;
        height: 285px;
    }

    .footer_item {
        width: 280px;
        height: 80px;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.32px;
        color: #5C6270;
        padding: 0;
        padding-top: 43px;
    }

    .first_advantage {
        background-image: url("./img/footerAdvantages1.png");
        background-repeat: no-repeat;
    }

    .second_advantage {
        background-image: url("./img/footerAdvantages2.png");
        background-repeat: no-repeat;
    }

    .third_advantage {
        background-image: url("./img/footerAdvantages3.png");
        background-repeat: no-repeat;
    }

    .fourth_advantage {
        background-image: url("./img/footerAdvantages4.png");
        background-repeat: no-repeat;
    }

    .footer_span {
        font-weight: bold;
        font-size: 16px;
        line-height: 32px;
        color: #3A3E46;
    }

    .annotation {
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 40px;
    }

    footer {
        background: #685761;
        font-size: 13px;
        position: relative;
        bottom: 105px;
        color: #ffffff;
    }

    .footer_container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .footer_information_block {
        width: 1180px;
        display: flex;
        justify-content: space-around;
        padding-top: 24px;
        padding-bottom: 20px;
    }

    .question {
        width: 380px;
    }

    .footer_title {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 15px;
    }

    .number {
        font-size: 14px;
        color: #666666;
    }

    .question_text {
        line-height: 20px;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 16px;
    }

    .question_span {
        text-decoration: underline;
    }

    .footer_hover {
        cursor: pointer;
    }

    .footer_hover:hover {
        color: #ff0000;
        transition: all 0.3s ease 0s;
        -webkit-transition: All 0.3s ease 0s;
        -moz-transition: All 0.3s ease 0s;
        -o-transition: All 0.3s ease 0s;
    }

    li {
        list-style-type: none;
        margin-bottom: 7px;
    }

    .footer_link {
        font-size: 14px;
        color: rgba(256, 256, 256, 0.8);
        cursor: pointer;
    }

    .footer_link:hover {
        color: #ff0000;
        transition: all 0.3s ease 0s;
        -webkit-transition: All 0.3s ease 0s;
        -moz-transition: All 0.3s ease 0s;
        -o-transition: All 0.3s ease 0s;
    }

    .footer_list {
        position: relative;
        top: 54px;
    }

    .underfooter {
        font-size: 12px;
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        background-color: #473B42;
    }

    .underfooter_block {
        width: 1180px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .underfooter_link {
        margin-left: 24px;
        text-decoration: underline;
    }
</style>
