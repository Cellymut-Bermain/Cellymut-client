<template>
  <q-table
    :columns="columns"
    :data="carts"
    row-key="name"
    color="secondary"
    :pagination.sync="pagination"
  >
    <q-tr slot="body" slot-scope="props" :props="props" >
      <q-td key="image" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div class="col-lg-6">
            <img style="width: 100px; height: auto" :src="props.row.Item.item_image" alt="">
          </div>
          <q-card-actions align="center">
            <q-btn @click="openModalDetail(props.row)" flat>Detail</q-btn>
          </q-card-actions>
        </div>
      </q-td>


      <q-td key="item_name" :props="props" style="width: 100px" >
        <div  class="row wrap items-start justify-start">
          <div class="col-lg-6">
            <div class="col-lg-12">
              <h1 class="font-size-subheader-28 font-weight-normal color1" > {{props.row.Item.item_name}} </h1>
            </div>
            <div class="col-lg-12">
              <p class="font-size-paragraph-21 font-weight-normal color2" >
                Color
              </p>
              <img style="width: 30px; height: auto;" :src="color[props.row.Item.color]" alt="">
            </div>
            <div class="col-lg-12">
              <p class="font-size-paragraph-21 font-weight-normal color2" >
                Size: {{props.row.Item.size}}
              </p>
            </div>
            <div class="col-lg-12" >
            </div>
          </div>
        </div>
      </q-td>


      <q-td key="price" :props="props" >
        <div class="row wrap items-start justify-start">
          <p class="font-size-paragraph-21 font-weight-normal color2">
            Rp.{{props.row.Item.item_price | parsedMoney}}
          </p>
        </div>
      </q-td>
      <q-td key="quantity" :props="props" >
        <div class="row wrap items-start justify-start">
          <p class="font-size-paragraph-21 font-weight-normal color2">
            <q-btn v-if="props.row.quantity>1" @click="decCart(props.row)" style="padding: 0 !important;" small icon="remove" flat></q-btn>
            <q-btn v-if="props.row.quantity==1" disabled @click="decCart(props.row)" style="padding: 0 !important;" small icon="remove" flat></q-btn>
            {{props.row.quantity}}
            <q-btn @click="incCart(props.row)" style="padding: 0 !important;" small icon="add" flat></q-btn>
            <q-btn @click="deleteCart(props.row.__index)" no-caps flat small color="red" icon="delete" round> <q-tooltip>Delete Cart</q-tooltip> </q-btn>
          </p>
        </div>
      </q-td>
      <q-td key="total" :props="props" >
        <div class="row wrap items-start justify-start">
          <p class="font-size-paragraph-21 font-weight-normal color2">
            RP.{{props.row.quantity * props.row.Item.item_price | parsedMoney}}
          </p>
        </div>
      </q-td>
      <q-td key="order" :props="props" >
        <div class="vl"></div>
        <div class="row wrap items-start justify-center">
          <div class="col-lg-12">
            <p class="font-size-36 font-weight-normal color1" >
              Rp.{{props.row.quantity * props.row.Item.item_price | parsedMoney}}
            </p>
          </div>
          <div class="col-lg-12">
            <q-btn @click="openModalAddress(props.row)" class="selesai-order" text-color="white" no-caps>Selesai Order</q-btn>
          </div>
        </div>
      </q-td>
    </q-tr>

  </q-table>
</template>

<script>
  import axios from 'axios'
  import {api} from "../../../config";
  const token = localStorage.getItem('token')
  let color = require('../../../config/images')
  export default {
    data () {
      return {
        columns: [
          { name: 'image', label: '', field: 'image',
            align: 'center', sortable: true },
          { name: 'item_name', label: 'Item', field: 'item_name',
            align: 'left', sortable: true },
          { name: 'price', label: 'Price', field: 'price',
            align: 'left', sortable: true },
          { name: 'quantity', label: 'Qty', field: 'quantity',
            align: 'left', sortable: true },
          { name: 'total', label: 'Total', field: 'total',
            align: 'left'},
          { name: 'order', label: 'Order Summary', field: 'order',
            align: 'center'},
        ],
        pagination: {
          sortBy: null, // String, column "name" property value
          descending: false,
          page: 1,
          rowsPerPage: 100 // current rows per page being displayed
        },
        carts: [],
        color
      }
    },
    methods: {
      openModalAddress (row) {
        this.$store.commit('setCartDetail', row)
        this.$store.commit('setModalAddress', true)
      },
      openModalDetail (row ) {
        this.$store.commit('setCartDetail', row)
        this.$store.commit('setModalDetail', true)
      },
      fetchingCart () {
        axios.get(api+'carts', {
          headers: {
            token
          }
        })
          .then(({data}) => {
            console.log(data.carts)
            this.carts = data.carts
            this.$store.commit('setCart', this.carts )
          })
          .catch(err => {
            console.log(err)
          })
      },
      incCart (cart) {
        axios.put(api+'carts/inc-quantity', {
          UserId: cart.UserId,
          ItemId: cart.ItemId
        })
          .then(({data})=> {
            this.carts[cart.__index].quantity++
          })
          .catch(err=> {
            console.log(err)
          })
      },
      decCart (cart) {
        axios.put(api+'carts/dec-quantity', {
          UserId: cart.UserId,
          ItemId: cart.ItemId
        })
          .then(({data})=> {
            this.carts[cart.__index].quantity--
          })
          .catch(err=> {
            console.log(err)
          })
      },
      deleteCart (index) {
        swal({
          title: "Apakah kamu yakin??",
          text: "Kamu harus menambahkan ke keranjang lagi jika ingin membeli barang ini",
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
  .vl {
    border-left: 1px dotted #6c6c6c;
    height: 210px;
    position: absolute;
    margin-left: -3px;
    top: 0;
    text-align: left;
  }
  .color1 {
    color: #766a77;
  }
  .color2 {
    color: #6c6c6c;
  }
  .selesai-order {
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #ec6e82;
  }
</style>
