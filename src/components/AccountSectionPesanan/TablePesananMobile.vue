<template>
  <div>
    <div v-if="items.length===0" class="row wrap items-center justify-center">
      <div class="col-xs-12">
      <img style="width: 100%" :src="logo" alt="">
      </div>
      <div class="col-xs-12 color-cart">
        <h2 class="font-size-header-48 font-weight-normal align-center">Tidak ada hasil</h2>
      </div>
    </div>
    <q-collapsible v-if="items.length>0" v-for="(item, index) in items" :avatar="color[item.Item.color]" :label="item.Item.item_name" :key="index" >
      <div class="row wrap items-start justify-left">
        <div class="col-xs-12">
          <h5 class="margin-h5">Nomor Pesanan:  LX-{{item.id.slice(0,8).toUpperCase()}}</h5>
        </div>
        <div class="col-xs-12">
          <h5 class="margin-h5">Tanggal Pesanan:  {{item.updatedAt | getDate}}</h5>
        </div>
        <div class="col-xs-12">
          <h5 class="margin-h5">Price:  Rp.{{item.total | parsedMoney}}</h5>
        </div>
        <div class="col-xs-12">
          <h5 class="margin-h5">Qty:  {{item.quantity}} pcs</h5>
        </div>
        <div class="col-xs-12">
          <h5 class="margin-h5" v-if="item.status_transaction==0">Menunggu Pembayaran</h5>
          <h5 class="margin-h5" v-if="item.status_transaction==1">Pembayaran Diterima</h5>
          <h5 class="margin-h5" v-if="item.status_transaction==2">Barang Sudah Dikirim</h5>
          <h5 class="margin-h5" v-if="item.status_transaction==3">Barang Diterima</h5>
          <h5 class="margin-h5" v-if="item.status_transaction==-1">Pembelian Ditolak</h5>
        </div>
        <div class="col-cs-12">
          <div class="row wrap justify-end">
            <img style="width: 50%; height: 100px !important;" :src="item.Item.item_image" alt="">
          </div>
        </div>
      </div>
    </q-collapsible>
  </div>
</template>

<script>
  import image from '../../assets/assets/pilihan-01.png'
  import logo from '../../assets/assets/logofix_.png'

  let color = require('../../config/images')
  console.log(color)
  import axios from 'axios'
  import moment from 'moment'
  let token = localStorage.getItem('token')
  import {api} from "../../config";

  export default {
    data () {
      return {
        items: [],
        color,
        logo
      }
    },
    methods: {
      fetchingPesanan () {
        axios.get(api+'transactions/user/all', {
          headers: {
            token
          }
        })
          .then(({data})=> {
            console.log(data)
            this.items = data.trans
          })
          .catch(err=> {
            console.log(err)
          })
      }
    },
    mounted () {
      this.fetchingPesanan()
    },
    filters : {
      getDate (value) {
        let date = moment(value).format("MMMM Do YYYY");
        let time = moment(value).format("h:mm:ss a")
        return `${date}`
      },
      parsedMoney (value) {
        return Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
      }
    }
  }

</script>

<style>
  .margin-h5 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .color-cart {
    color: #707070;
  }
</style>
