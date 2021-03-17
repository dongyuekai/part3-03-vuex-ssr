import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

// 用于设置localstorage的自定义vuex插件
// cart模块的每一个mutation执行完毕之后执行
const myPlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('cart/')) {
      window.localStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
    }
  })
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products, cart
  },
  plugins: [
    myPlugin
  ]
})
