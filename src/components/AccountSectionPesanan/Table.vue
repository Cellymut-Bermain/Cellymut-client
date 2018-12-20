<template>
  <q-table
    :columns="columns"
    :data="items"
    row-key="name"
    color="secondary"
    :pagination.sync="pagination"
  >
    <q-tr slot="body" slot-scope="props" :props="props" >
      <q-td key="image" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
            <img style="width: 100px; height: auto" :src="props.row.Item.item_image" alt="">
        </div>
      </q-td>
      <q-td key="item_name" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div> {{props.row.Item.item_name}} </div>
        </div>
      </q-td>
      <q-td key="nomer_pesanan" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div> LX-{{props.row.id.slice(0,8).toUpperCase()}}  </div>
        </div>
      </q-td>
      <q-td key="tanggal_pesanan" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div> {{props.row.updatedAt | getDate}}  </div>
        </div>
      </q-td>
      <q-td key="total" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div> Rp.{{props.row.total | parsedMoney}}  </div>
        </div>
      </q-td>
      <q-td key="status" :props="props"  style="width: 231px !important;" >
        <div class="row items-center justify-between wrap">
          <div v-if="props.row.status_transaction==0"> Menunggu Pembayaran  </div>
          <div v-if="props.row.status_transaction==1"> Pembayaran Diterima  </div>
          <div v-if="props.row.status_transaction==2"> Barang Sudah Dikirim  </div>
          <div v-if="props.row.status_transaction==3"> Barang Diterima  </div>
          <div v-if="props.row.status_transaction==-1"> Pembelian Ditolak  </div>
        </div>
      </q-td>

    </q-tr>
  </q-table>
</template>

<script>
  import image from '../../assets/assets/pilihan-01.png'
  import axios from 'axios'
  import moment from 'moment'
  let token = localStorage.getItem('token')
  import {api} from "../../config";

  export default {
    data () {
      return {
        items: [],
        columns: [
          { name: 'image', label: '', field: 'image',
            align: 'center', sortable: true },
          { name: 'item_name', label: 'Item', field: 'item_name',
            align: 'left', sortable: true },
          { name: 'nomer_pesanan', label: 'Nomer Pesanan', field: 'nomer_pesanan',
            align: 'left', sortable: true },
          { name: 'tanggal_pesanan', label: 'Tanggal Pesanan', field: 'tanggal_pesanan',
            align: 'left', sortable: true },
          { name: 'total', label: 'Price', field: 'total',
            align: 'left'},
          { name: 'status', label: 'Status Pesanan', field: 'status',
            align: 'center'},
        ],
        pagination: {
          sortBy: null, // String, column "name" property value
          descending: false,
          page: 1,
          rowsPerPage: 100 // current rows per page being displayed
        },
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
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 24px;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {background-color: #f2f2f2;}
  hr {
    border:none;
    border-top:1px dotted #f00;
    color:#fff;
    background-color:#fff;
    height:1px;
    width:100%;
  }
</style>
