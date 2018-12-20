<template>
  <div style="width: 100% !important; " class="margin-top-mobile mobile-keranjang justify-mobile-keranjang">
    <h2 class="font-weight-normal font-size-header-48 align-left text-auth align-keranjang-mobile-center" style="margin-top: 0" >Keranjang Belanja</h2>
    <q-breadcrumbs class="text-auth bread-mobile-center" color="#707070" active-color="#707070" style="margin-top: -24px; font-size: 21px">
      <q-breadcrumbs-el label="Account" />
      <q-breadcrumbs-el label="Keranjang Belanja" />
    </q-breadcrumbs>
    <TableCart v-if="width>991" />
    <TableCartMobile v-if="width<=991" />
    <ModalAddress />
    <ModalSummary v-if="cartDetail" />
    <ModalPembayaran v-if="cartDetail" />
  </div>
</template>

<script>
  import TableCart from './TableCart'
  import TableCartMobile from './TableCartMobile'
  import ModalAddress from '../Modal/ModalAddress'
  import ModalSummary from '../Modal/ModalSummary'
  import ModalPembayaran from '../Modal/ModalPembayaran'
  import {mapState, mapActions} from 'vuex'
  export default {
    components: {
      TableCart,
      ModalAddress,
      ModalSummary,
      ModalPembayaran,
      TableCartMobile
    },
    computed: {
      ...mapState([
        'cartDetail', 'width'
      ])
    },
    methods: {
      ...mapActions([
        'checkingSize'
      ])
    },
    mounted () {
      this.checkingSize()
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

