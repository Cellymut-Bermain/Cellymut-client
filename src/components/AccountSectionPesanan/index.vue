<template>
  <div style="width: 100%" class="margin-top-mobile">
      <h2 class="font-weight-normal font-size-header-48 align-left text-auth align-keranjang-mobile-center" style="margin-top: 0" >Pesanan Saya</h2>
      <q-breadcrumbs class="text-auth bread-mobile-center" color="#707070" active-color="#707070" style="margin-top: -24px; font-size: 21px">
        <q-breadcrumbs-el label="Akun" />
        <q-breadcrumbs-el label="Pesanan Saya" />
      </q-breadcrumbs>
      <div style="margin-top: 12px; width:100%" class="row wrap justify-left items-start">
        <div class="row wrap justify-left items-center" style="width: 100%">
          <div >
            <p style="margin-bottom: 0" class="font-weight-normal font-size-paragraph-21">Butuh bantuan?</p>
          </div>
          <div class="col-lg-3" >
            <div class="justify-left row wrap">
              <img @click="openSosial('https://api.whatsapp.com/send?phone=081703339038&text=&source=&data=')" style="width: 40px; height: 40px; cursor: pointer" src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG1.png" alt="">
            </div>
          </div>
          <div class="col-lg-12">
            <p style="margin-bottom: 0" class="font-weight-normal font-size-paragraph-21">BCA : 783 019 8703. a.n Mariana Trinaga BCA </p>
          </div>
          <br><br>
        </div>
      </div>
    <Table v-if="width>992" />
    <TableMobile v-if="width<=992" />
  </div>
</template>
<script>
  import image from '../../assets/assets/pilihan-01.png'
  import Table from './Table'
  import TableMobile from './TablePesananMobile'
  export default {
    components: {
      Table, TableMobile
    },
    data () {
      return {
        pagination: {
          sortBy: null, // String, column "name" property value
          descending: false,
          page: 1,
          rowsPerPage: 100 // current rows per page being displayed
        },
        items: [
          {
            item_name : 'Monopoly Cellymut',
            image_src: image,
            nomer_pesanan: 'LX-40309876',
            tanggal_pesanan : '24 December 2018',
            price: 200000,
            quantity: 2,
            status_pesanan : 'Pembayaran Diterima'
          },
          {
            item_name : 'Monopoly Cellymut',
            image_src: image,
            nomer_pesanan: 'LX-40309871',
            tanggal_pesanan : '24 December 2018',
            price: 200000,
            quantity: 2,
            status_pesanan : 'Pembayaran Diterima'
          }
        ]
      }
    },
    computed: {
      width: {
        get () {
          return this.$store.state.width
        }
      }
    },
    methods: {
      openSosial (val) {
        window.open(val)
      }
    }
  }
</script>
<style>
  @media only screen and (max-width: 992px) {
    .mobile-keranjang {
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin: auto;
      text-align: center;
    }
    .align-keranjang-mobile-center {
      text-align: center !important;
    }
    .bread-mobile-center {
      justify-content: center !important;
    }
  }
  @media only screen and (max-width: 420px) {
    .justify-mobile-keranjang {
      justify-content: center !important;
      margin-left: 20px !important;
    }
  }
</style>
