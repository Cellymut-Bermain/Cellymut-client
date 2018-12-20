<template>
  <div>
    <div v-if="carts.length===0" class="row wrap items-center justify-center color-cart ">
      <div class="col-xs-12">
        <img style="width: 100%" :src="empty" alt="">
      </div>
      <div class="col-xs-12">
        <h2 class="font-size-header-48 font-weight-normal">Keranjang anda kosong</h2>
        <p class="font-size-paragraph-24">Buat kehidupan anda menjadi menyenangkan</p>
      </div>
      <div class="col-xs-12">
        <q-btn to="/" color="pink" text-color="white" no-caps>Belanja Sekarang</q-btn>
      </div>
    </div>
    <q-collapsible v-if="carts.length>0" class="border-top-acc border-bottom-acc" v-for="(cart, index) in carts" :avatar="color[cart.Item.color]" :label="cart.Item.item_name" :key="index">
      <div class="row wrap justify-start" style="width: 100% !important;">
        <div class="col-lg-4">
          <img :src="cart.Item.item_image" style="width: 100px; height: auto;" alt="">
        </div>
      </div>

      <div class="row wrap">

        <div class="col-6">
          <div class="row wrap justify-start">
            <q-card-main>
              Size:
            </q-card-main>
          </div>
        </div>

        <div class="col-6">
          <div class="row wrap justify-end">
            <q-card-main>
              {{cart.Item.size}}
            </q-card-main>
          </div>
        </div>
      </div>
      <div class="row wrap">

        <div class="col-6">
          <div class="row wrap justify-start">
            <q-card-main>
              Qty:
            </q-card-main>
          </div>
        </div>

        <div class="col-6">
          <div class="row wrap justify-end">
            <q-card-actions align="end">
              <q-btn v-if="cart.quantity===1" disabled @click="decCart" flat color="red" small round icon="remove"></q-btn>
              <q-btn v-if="cart.quantity>1" @click="decCart(cart,index)" flat color="red" small round icon="remove"></q-btn>
              <q-btn @click="incCart(cart, index)" flat color="primary" small round icon="add"></q-btn>
            </q-card-actions>
            <q-card-main>
              {{cart.quantity}}
            </q-card-main>
          </div>
        </div>
      </div>
      <div class="row wrap">

        <div class="col-6">
          <div class="row wrap justify-start">
            <q-card-main>
              Price:
            </q-card-main>
          </div>
        </div>

        <div class="col-6">
          <div class="row wrap justify-end">
            <q-card-main>
              Rp.{{cart.Item.item_price | parsedMoney}}
            </q-card-main>
          </div>
        </div>
      </div>
      <div class="row wrap">

        <div class="col-6">
          <div class="row wrap justify-start">
            <q-card-main>
              Total:
            </q-card-main>
          </div>
        </div>

        <div class="col-6">
          <div class="row wrap justify-end">
            <q-card-main>
              Rp.{{cart.quantity*cart.Item.item_price | parsedMoney}}
            </q-card-main>
          </div>
        </div>
      </div>
      <q-card-actions align="end"> <q-btn @click="deleteCart(index)" icon="delete" round small flat color="red"><q-tooltip>Delete Cart</q-tooltip></q-btn></q-card-actions>
      <q-card-actions><q-btn @click="openModalAddress(cart)" class="selesai-order" text-color="white" no-caps>Selesai Order</q-btn></q-card-actions>
    </q-collapsible>
  </div>
</template>

<script>
  let color = require('../../../config/images')
  import axios from 'axios'
  import {api} from "../../../config";
  const token = localStorage.getItem('token')
  import empty from '../../../assets/assets/empty_cart_retina.png'

  export default {
    data () {
      return {
        carts: [],
        color,
        empty
      }
    },
    methods: {
      openModalAddress (cart) {
        this.$store.commit('setCartDetail', cart)
        this.$store.commit('setModalAddress', true)
      },
      fetchingCart () {
        axios.get(api+'carts', {
          headers: {
            token
          }
        })
          .then(({data}) => {
            console.log(data.carts,' dari mobile version')
            this.carts = data.carts
            this.$store.commit('setCart', this.carts)
          })
          .catch(err => {
            console.log(err)
          })
      },
      incCart (cart, index) {
        axios.put(api+'carts/inc-quantity', {
          UserId: cart.UserId,
          ItemId: cart.ItemId
        })
          .then(({data})=> {
            this.carts[index].quantity++
          })
          .catch(err=> {
            console.log(err)
          })
      },
      decCart (cart, index) {
        axios.put(api+'carts/dec-quantity', {
          UserId: cart.UserId,
          ItemId: cart.ItemId
        })
          .then(({data})=> {
            this.carts[index].quantity--
          })
          .catch(err=> {
            console.log(err)
          })
      },
      deleteCart (index) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you cart will be gone forever",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your cart has been deleted!", {
                icon: "success",
              })
                .then(()=> {
                  let cart = this.carts[index]
                  axios.delete(api+`carts/delete/cart/${cart.ItemId}/${cart.UserId}`)
                    .then(({data})=> {
                      console.log(data)
                      this.$store.commit('removeCart', index)
                      this.carts.splice(index, 1)
                    })
                    .catch(err=> {
                      console.log(err)
                    })
                })
            }
          });
      }
    },
    mounted () {
      this.fetchingCart()
      this.$store.commit('setCart', this.carts )
    },
    filters: {
      parsedMoney (value) {
        return Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
      }
    }
  }
</script>

<style>

  .border-top-acc {
    border-top: 1px solid #766a77;
    width: 100%;
  }
  .border-bottom-acc {
    border-bottom: 1px solid #766a77;
    width: 100%;
  }
  .color-cart {
    color: #707070;
  }
  .color-btn {
    color: #ec6e82;
  }
</style>
