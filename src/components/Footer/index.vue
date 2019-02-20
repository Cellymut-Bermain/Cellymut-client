<template>
  <div style="width: 100%">
  <div v-if="width>950" class="row wrap section4 items-center justify-center" style="color:#6c6c6c" >

    <div class="col-lg-3">
      <div class="row wrap items-center justify-center ">
        <q-card flat>
          <q-card-main>
            <p @click="toRoute('product')" class="p-margin-bot pointer-nav" > Tutorial </p>
            <p @click="toRoute('about')" class="p-margin-bot pointer-nav"> Tentang Kami</p>
            <p @click="toRoute('askme')" class="p-margin-bot pointer-nav"> Tanya Kami</p>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div class="col-lg-1">
      <div class="row wrap items-start justify-end">
      <q-card-title style="margin-top: -48px">
        Contact:
      </q-card-title>
      </div>
    </div>
    <div class="col-lg-3 " >
      <div class="row wrap justify-left">
        <q-card flat>
          <q-card-main>
            <p class="p-margin-bot" >Maria: +62 822-3103-0330   </p>
            <p class="p-margin-bot" >Jane: +62 817-0333-9038</p>
            <p class="p-margin-bot" >Email: selimutbermain@gmail.com</p>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="row wrap justify-center" >
        <q-card flat>
          <q-card-title>
            © Copyright 2018 Cellymut
            <img class="image-size-footer" style="cursor: pointer; margin-left: 24px;margin-right: 24px" @click="openSosial('https://www.facebook.com/Selimut-Bermain-536283366850948')" :src="facebook" alt="">
            <img class="image-size-footer" style="cursor: pointer;" @click="openSosial('https://www.instagram.com/selimutbermain')"  :src="instagram" alt="">
          </q-card-title>
        </q-card>
      </div>
    </div>
  </div>

    <div v-if="width<=950"  style="width: 100%; margin-top: 2rem;color:#6c6c6c" >

      <div class="col-xs-12">
        <div class="row wrap justify-start mobile-footer">
          <p class="copy">© Copyright 2018 Cellymut</p>
        </div>
      </div>
      <div class="col-xs-12 ">
        <q-card-title class="align-center">
          Contact us:
        </q-card-title>
        <div class="row wrap justify-start mobile-footer">
          <p >Maria: +62 822-3103-0330  </p>
        </div>
        <div class="row wrap justify-start mobile-footer">
          <p >Jane: +62 817-0333-9038</p>
        </div>
        <div class="row wrap justify-start mobile-footer">
          <p >Email: selimutbermain@gmail.com</p>
        </div>
      </div>

      <div class="col-xs-12 ">

        <div class="row wrap justify-end right mobile-footer">
          <div class="col-md-1 col-xs-1 ">
            <img style="cursor: pointer" @click="openSosial('https://www.facebook.com/Selimut-Bermain-536283366850948')" :src="facebook" alt="">
          </div>

          <div class="col-xs-1">
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
        console.log('value', value)
        // window.location = value
        window.open(value, '_blank')
      },
      toRoute(value) {
        this.$router.push('/'+value)
      }
    }
  }
</script>

<style scoped>
  .pointer-nav {
    cursor: pointer;
  }
  .section4{
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
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

