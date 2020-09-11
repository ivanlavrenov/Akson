import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        delivery: [],
        shops: [],
        numbers: []
    },
    mutations: {
        SET_DELIVERY_TO_STATE: (state, delivery) => {
            state.delivery = delivery;
        },

        SET_SHOPS_TO_STATE: (state, shops) => {
            state.shops = shops;
        },

        SET_NUMBERS_TO_STATE: (state, numbers) => {
            state.numbers = numbers;
        }
    },
    actions: {
        GET_DELIVERY_FROM_API({commit}) {
            return axios('http://localhost:3000/delivery', {
                method: "GET"
            })
                .then((delivery) => {
                    commit('SET_DELIVERY_TO_STATE', delivery);
                })
        },

        GET_SHOPS_FROM_API({commit}) {
            return axios('http://localhost:3000/shops', {
                method: "GET"
            })
                .then((shops) => {
                    commit('SET_SHOPS_TO_STATE', shops);
                })
        },
        GET_NUMBERS_FROM_API({commit}) {
            return axios('http://localhost:3000/numbers', {
                method: "GET"
            })
                .then((numbers) => {
                    commit('SET_NUMBERS_TO_STATE', numbers);
                })
        }
    },
    getters: {
        DELIVERY(state) {
            return state.delivery.data;
        },

        SHOPS(state) {
            return state.shops.data;
        },

        NUMBERS(state) {
            return state.numbers.data;
        }
    }
});


export default store;
