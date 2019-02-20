<template>
  <q-modal maximized v-model="modalDetail">
    <q-modal-layout>
      <q-toolbar color="white" slot="header">
          <q-btn
            flat
            round
            dense
            v-close-overlay
            icon="clear"
            color="black"
          />
      </q-toolbar>
      <div class="row wrap items-center justify-center">
        <div class="container col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <img class="image-detail" :src="monopolyCart" alt="Snow">
          <div class="centered-monopoly">{{cartDetail.name}}</div>
        </div>
        <div class="container col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <img class="image-detail" :src="ularCart" alt="Snow">
          <div class="centered-ular">{{cartDetail.name}}</div>
        </div>
      </div>
      <div class="row wrap items-center justify-center">
        <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img class="image-detail" :src="kartu200" alt="Snow">
          <div class="centered-kartu">{{cartDetail.name}}</div>
        </div>
        <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img class="image-detail" :src="kartu100" alt="Snow">
          <div class="centered-kartu">{{cartDetail.name}}</div>
        </div>
        <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img class="image-detail" :src="kartu50" alt="Snow">
          <div class="centered-kartu">{{cartDetail.name}}</div>
        </div>
        <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img class="image-detail" :src="kartu25" alt="Snow">
          <div class="centered-kartu">{{cartDetail.name}}</div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  import monopolyCart from '../../assets/assets/monopoly_cart.jpg'
  import ularCart from '../../assets/assets/ular_cart.jpeg'
  import {kartu25, kartu50, kartu100, kartu200} from '../../config/images'
  export default {
    data () {
      return {
        monopolyCart,kartu25,kartu50,kartu100,kartu200,ularCart
      }
    },
    computed: {
      modalDetail: {
        get () {
          return this.$store.state.modalDetail
        },
        set (value) {
          this.$store.commit('setModalDetail', value)
        }
      },
      cartDetail: {
        get() {
          return this.$store.state.cartDetail
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
  .container {
    position: relative;
    text-align: center;
    color: red;

  }

  .centered-monopoly {
    position: absolute;
    top: 51.7%;
    left: 47%;
    transform: rotate(-45deg);
    background-color: white;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 16px;
    padding-right: 16px;
    text-transform: uppercase;
  }
  .centered-ular {
    position: absolute;
    top: 6%;
    left: 5%;
    background-color: transparent;
    padding-top: 2px;
    padding: 2px;
    font-family: 'Kaushan Script', cursive;
    color: yellow;
  }
  .centered-kartu {
    position: absolute;
    top: 85%;
    left: 45%;
    background-color: white;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 8px;
    text-transform: uppercase;
  }

  .image-detail {
    width: 100% !important;
  }
</style>
