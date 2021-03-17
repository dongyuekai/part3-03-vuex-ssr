const state = {
  // 购物车中 数据从 localStorage 读取
  cartProducts: JSON.parse(window.localStorage.getItem('cart-products')) || []
}
const getters = {
  totalCount(state) {
    return state.cartProducts.reduce((sum, product) => sum + product.count, 0)
  },
  totalPrice(state) {
    return state.cartProducts.reduce((sum, product) => sum + product.totalPrice, 0)
  },
  checkedCount(state) {
    return state.cartProducts.reduce((sum, product) => {
      if (product.isChecked) {
        sum += product.count
      }
      return sum
    }, 0)
  },
  checkedPrice(state) {
    return state.cartProducts.reduce((sum, product) => {
      if (product.isChecked) {
        sum += product.totalPrice
      }
      return sum
    }, 0)
  }
}
const mutations = {
  addToCart(state, product) {
    // cartProducts中没有该商品 把该商品添加到数组 并增加count isChecked totalPrice
    // cartProducts有该商品 让商品的数量+1 选中此项商品 计算价格
    const prod = state.cartProducts.find(item => item.id === product.id)
    if (prod) {
      prod.count++
      prod.isChecked = true
      prod.totalPrice = prod.count * prod.price
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        isChecked: true,
        totalPrice: product.price
      })
    }
    // 存储在localStorage中 此处多处都要这么写 所以封装写在vuex插件中
    // window.localStorage.setItem('cart-products',JSON.stringify(state.cartProducts))
  },
  deleteFromCart(state, productId) {
    const prodIdx = state.cartProducts.findIndex(item => item.id === productId)
    if (prodIdx !== -1) {
      state.cartProducts.splice(prodIdx, 1)
    }
  },
  updateAllProductChecked(state, checked) {
    state.cartProducts.forEach(prod => {
      prod.isChecked = checked
    })
  },
  updateProductChecked(state, { checked, prodId }) {
    const prod = state.cartProducts.find(prod => prod.id === prodId)
    prod && (prod.isChecked = checked)
  },
  updateProduct(state, {
    prodId,
    count
  }) {
    const prod = state.cartProducts.find(prod => prod.id === prodId)
    if (prod) {
      prod.count = count
      prod.totalPrice = count * prod.price
    }
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}