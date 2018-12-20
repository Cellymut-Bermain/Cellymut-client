<template>
  <div class="row section4 footer-class" >
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
    methods: {
      openSosial (value) {
        window.open(value)
      }
    }
  }
</script>

<style scoped>
  .section4{
    height: 100px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  .copy{
    /* position: absolute; */
    margin-top: 40px;
    /*margin-left: 73px;*/
  }
  .right{
    /* position: absolute; */
    margin-top: 40px;
    /*margin-right: 73px;*/
  }

  @media only screen and (max-width: 768px) {
    .mobile-footer {
      justify-content: center;
    }
  }
  /*@media only screen and (max-width: 400px){*/
    /*.right{*/
      /*margin-left: 126px;*/
      /*!*margin-top: 70px;*!*/
    /*}*/
  /*}*/
</style>

