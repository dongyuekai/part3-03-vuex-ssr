import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //开启严格模式后 就不能直接修改state值 需要用mutation修改  在开发中启用 
  state: {
    count: 0,
    msg: "Hello Vuex"
  },
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    increate(state, payload) {
      state.count += payload
    }
  },
  actions: {
    increateAsync(context, payload) {
      setTimeout(() => {
        context.commit('increate', payload)
      }, 2000);
    }
  },
  modules: {
    cart,
    products
  }
})

