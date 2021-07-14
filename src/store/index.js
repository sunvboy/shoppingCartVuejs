import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import moduleCart from './cart/index'
import moduleProduct from './product/index'
const localStorage = store => {
  store.subscribe((mutation, state) => {
    //Lưu 
    window.localStorage.setItem('cart',JSON.stringify(state.cart));
  })
}
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
  modules:{
      cart: moduleCart,
      product: moduleProduct
  },
  plugins: [localStorage]
})  
export default store