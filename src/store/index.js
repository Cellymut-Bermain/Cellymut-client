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
    productDetail: null,
    address: {
      address: "",
      city: 0,
      postal_code: '',
      type_home: "",
      phone_number: ''
    },
    modalAddress : false,
    modalSummary: false,
    modalPembayaran: false,
    modalDetail: false,
    cart: [],
    cartDetail: null,
    updates: [],
    unreadUpdates: [],
    width: 0,
    height: 0,
    token: null,
    user : null,
    page: 'home',
    opened: true,
    showText: false,
    ended: false,
    widthEnded : false
  },
  mutations: {
    setUpdate (state, payload) {
      state.updates = payload
    },
    setUnreadUpdate (state, payload) {
      state.unreadUpdates = payload
    },
    setWidthEnded (state, payload) {
      state.widthEnded = payload
    },
    setOpened (state, payload) {
      state.opened = payload
    },
    setShowText (state, payload) {
      state.showText = payload
    },
    setEnded (state, payload) {
      state.ended = payload
    },
    setPage (state, payload) {
      state.page = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    removeToken (state) {
      state.token = null
    },
    setUser (state, payload) {
      state.user = payload
    },
    removeUser (state) {
      state.user = null
    },
    setLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setProductDetail (state, payload) {
      state.productDetail = payload
    },
    setAddress (state, payload) {
      state.address = payload
    },
    setCart (state, payload) {
      state.cart = payload
    },
    addCart (state, payload) {
      state.cart.push(payload)
    },
    removeCart (state, payload) {
      state.cart.splice(payload, 1)
    },
    emptyCart (state) {
      state.cart = []
    },
    setCartDetail (state, payload) {
      state.cartDetail = payload
    },

    setModalAddress (state, payload) {
      state.modalAddress = payload
    },
    setModalSummary (state, payload) {
      state.modalSummary = payload
    },
    setModalPembayaran (state, payload) {
      state.modalPembayaran = payload
    },
    setModalDetail (state, payload) {
      state.modalDetail = payload
    },

    setWidthHeight(state, payload) {
      state.width = payload.width
      state.height = payload.height
    }

  },
  actions: {

    fetchingUnreadUpdates ({commit}) {
      let token = localStorage.getItem('token')
      axios.get(api+'updates/user/all/unread', {
        headers: {
          token
        }
      })
        .then(({data})=> {
          commit('setUnreadUpdate', data.unreads)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    checkingSize ({commit}) {
      window.addEventListener('resize', (e) => {
        // this.width = e.target.innerWidth
        // this.height = e.target.innerHeight
        commit('setWidthHeight', {width: e.target.innerWidth, height: e.target.innerHeight })
      })
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      commit('setWidthHeight', {width: x, height: y })
    },
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

    },
    fetchingCart ({commit}) {
      let token = localStorage.getItem('token')
      axios.get(api+'carts', {
        headers: {
          token
        }
      })
        .then(({data}) => {
          console.log(data.carts)
          commit('setCart', data.carts )
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUser ({commit}) {
      let token = localStorage.getItem('token')
      axios.get(api+'users/get-one', {
        headers: {
          token
        }
      })
        .then(({data})=> {
          // this.$store.state.user = data.user
          commit('setUser', data.user)
        })
        .catch(err=> {
          console.log(err)
        })
    },
  }
})
