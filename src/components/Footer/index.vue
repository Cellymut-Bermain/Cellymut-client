<template>
  <div style="width: 100%">
  <div v-if="width>480" class="row wrap section4 items-center justify-end mobile-footer" style="color:#6c6c6c" >
    <div class="col-lg-6 col-md-12">
        <q-card flat class="top-footer">
          <q-card-main>
            <p class="p-margin-bot"> Tutorial </p>
            <p class="p-margin-bot"> Tentang Kami</p>
            <p class="p-margin-bot"> Tanya Kami</p>
          </q-card-main>
        </q-card>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="row wrap justify-end margin-right-footer">
        <q-card flat style="margin-right: 48px">
          <q-card-title>
            Contact us:
          </q-card-title>
          <q-card-main>
            <p class="p-margin-bot">Phone: +62 822-3103-0330 - Maria / +62 817-0333-9038 - Jane </p>
            <p class="p-margin-bot">Email: selimutbermain@gmail.com</p>
          </q-card-main>
        </q-card>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="row wrap justify-end margin-right-footer margin-right-footer" >
        <p style="margin-bottom: 0">© Copyright 2018 Cellymut</p>
        <img class="image-size-footer" style="cursor: pointer; margin-left: 24px;margin-right: 24px" :src="facebook" alt="">
        <img class="image-size-footer" style="cursor: pointer;" @click="openSosial('https://www.instagram.com/selimutbermain')"  :src="instagram" alt="">
      </div>
    </div>
  </div>

    <div v-if="width<=480"  style="width: 100%; margin-top: 2rem">
      <div class="col-md-6 col-xs-12 ">
        <div class="row wrap justify-start mobile-footer">
          <p class="copy">© Copyright 2018 Cellymut</p>
        </div>
      </div>

      <div class="col-md-6 col-xs-12 ">

        <div class="row wrap justify-end right mobile-footer">
          <div class="col-md-1 col-xs-1 ">
            <img style="cursor: pointer" :src="facebook" alt="">
          </div>

          <div class="col-md-1 col-xs-1">
            <img style="cursor: pointer" @click="openSosial('https://www.instagram.com/selimutbermain')"  :src="instagram" alt="">
          </div>
        </div>

      </div>
    </div>


  </div>


</template>
<script>
  import {facebook, instagram} from '../../config/images.js'
  export default {
    data(){
      return{
        facebook,
        instagram
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
      openSosial (value) {
        window.open(value)
      }
    }
  }
</script>

<style scoped>
  .section4{
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 24px;
  }
  .copy{
    /* position: absolute; */
    /*margin-top: 40px;*/
    /*margin-left: 73px;*/
  }
  .right{
    /* position: absolute; */
    margin-top: 40px;
    /*margin-right: 73px;*/
  }
  .p-margin-bot {
    margin-bottom: 6px;
  }
  .margin-right-footer {
    margin-right: 124px;
  }
  .top-footer {
    margin-left: 100px
  }
  /*.image-size-footer {*/
    /*width: 20px;*/
    /*height: 25px;*/
  /*}*/

  @media only screen and (max-width: 768px) {
    .mobile-footer {
      justify-content: center;
    }
    .margin-right-footer {
      margin-right: 0px;
    }
    .top-footer {
      margin-left: 0px;
    }
  }
  /*@media only screen and (max-width: 400px){*/
    /*.right{*/
      /*margin-left: 126px;*/
      /*!*margin-top: 70px;*!*/
    /*}*/
  /*}*/
</style>

