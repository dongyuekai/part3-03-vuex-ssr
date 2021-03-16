const state = {
  products: [
    { id: 1, title: 'iPhone 11', price: 8000 },
    { id: 2, title: 'iPhone 12', price: 10000 }
  ]
}
const getters = {}
const mutations = {
  setProducts(state, payload) {
    state.products = payload
  }
}
const actions = {}

export default {
  namespaced: true,  // 开启了命名控件后 mutation就不能直接用$store.commit('xx')这样调用了
  state,
  getters,
  mutations,
  actions
}
