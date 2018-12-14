import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import router from '../router/index'
import {api} from "../config";
import { Notify } from 'quasar'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
  state: {
    loginStatus : false,
    productDetail: null
  },
  mutations: {
    setLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setProductDetail (state, payload) {
      state.productDetail = payload
    }

  },
  actions: {
    fetchingProductDetail ({commit}, id) {
      axios.get(api+'items/'+id)
        .then(({data})=> {
          let {item} = data
          console.log(item, 'item detail')
          commit('setProductDetail', item)
        })
        .catch(err=> {
          console.log(err)
        })

    }
  }
})
