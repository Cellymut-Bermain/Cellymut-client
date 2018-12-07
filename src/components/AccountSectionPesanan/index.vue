<template>
  <div style="width: 100%">
      <h2 class="font-weight-normal font-size-header-48 align-left" >Pesanan Saya</h2>
      <q-breadcrumbs color="#707070" active-color="#707070" style="margin-top: -24px; font-size: 21px">
        <q-breadcrumbs-el label="Account" />
        <q-breadcrumbs-el label="Pesanan Saya" />
      </q-breadcrumbs>
      <div style="margin-top: 12px; width:100%" class="row wrap justify-left items-start">
        <div class="row wrap justify-left items-center" style="width: 100%">
          <div >
            <p style="margin-bottom: 0" class="font-weight-normal font-size-paragraph-21">Butuh bantuan?</p>
          </div>
          <div class="col-lg-3" >
            <div class="justify-left row wrap">
              <img style="width: 40px; height: 40px" src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    <Table />
  </div>
</template>
<script>
  import image from '../../assets/assets/pilihan-01.png'
  import Table from './Table'
  export default {
    components: {
      Table
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
    }
  }
</script>
<style>


  .scroll-wrapper {
    background-color: white;
    overflow: auto;
    white-space: nowrap;
  }
  .bar-nav {
    display: inline-block;
    color: black;
    text-align: center;
    padding: 14px;
    text-decoration: none;
  }

</style>
