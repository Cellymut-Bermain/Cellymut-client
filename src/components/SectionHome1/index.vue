<template>
  <div>
    <div v-if="width>991" class="section-1 row wrap items-end justify-center">


      <div class="col-lg-8 col-md-8 col-sm-12" >
        <!--<img class="stop-motion" :src="stopMotion" alt="">-->
        <video v-if="!ended" class="video-class" style="width: 130%" id="myVideo" muted>
          <source :src="video" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <img id="image-transition" class="zoomPic animate" style="width: 130%" v-if="ended && !widthEnded" :src="stopMotion" alt="">
        <img id="image-transition" class="zoomPic" style="width: 100%" v-if="ended && widthEnded" :src="stopMotion" alt="">
      </div>

      <div  class="col-lg-4 col-md-8 col-sm-12 justify-center padding-right-28 font-weight-normal self-center" >
        <q-card flat>
          <q-card-title align="right" class="text-navbar">
            <h1 v-if="!showText" style="color: #e9e7f1;" class="font-size-header-48 font-weight-normal">Hallo Bunda dan Ayah</h1>
            <h1 v-if="showText" class="font-size-header-48 font-weight-normal">Hallo Bunda dan Ayah</h1>
          </q-card-title>
          <q-card-main align="right" class="text-navbar font-size-subheader-28 font-weight-normal">
            <p  v-if="!showText" style="color: #e9e7f1;" class="font-weight-normal"> {{textMain}} </p>
            <p v-if="showText" class="font-weight-normal"> {{textMain}} </p>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div v-if="width<=991" class="section-1 row wrap items-center justify-center">

      <div class="col-lg-4 col-md-8 col-sm-12 justify-center padding-right-28 font-weight-normal" style="margin-top: 64px" >
        <q-card flat>
          <q-card-title align="center" class="text-navbar">
            <h1 class="font-size-mobile-24 font-weight-normal">Hallo Bunda dan Ayah</h1>
          </q-card-title>
          <q-card-main align="center" class="text-navbar font-size-mobile-16 font-weight-normal">
            <p class="font-weight-normal"> {{textMain}} </p>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12" style="margin-top: -200px" >
        <img class="stop-motion" :src="stopMotion" alt="">
      </div>
    </div>

  </div>
</template>

<script>

  import {stopMotion} from '../../config/images'
  import logo from '../../assets/assets/logo-cellimut.png'
  import video from '../../assets/assets/celimut-motion (2).mp4'
  import $ from 'jquery'
  export default {
    mounted () {
      this.checkingSize()
      // console.log(this.opened,'opened')
      // if (this.opened==false) {
      //   console.log(this.opened,'opened')
      //   this.videoEnded()
      // }
      if (this.opened===false) {
        this.$store.commit('setEnded', true)
        this.$store.commit('setShowText', true)
      }
    },
    data () {
      return {
        stopMotion,
        textMain: 'Cellymut Bermain adalah 100% produk Indonesia yang ramah anak, merupakan buah kreasi ' +
          'Jane Permana yang memiliki dua anak balita.',
        logo,
        width: 2000,
        height: 2000,
        video,
      }
    },
    computed: {
      widthEnded: {
        get () {
          return this.$store.state.widthEnded
        }
      },
      opened: {
        get () {
          return this.$store.state.opened
        }
      },
      showText: {
        get () {
          return this.$store.state.showText
        }
      },
      ended : {
        get() {
          return this.$store.state.ended
        },
        set (value) {
          this.$store.commit('setEnded', value)
        }
      }
    },
    methods: {
      clickJa () {
        console.log('waduh gak jalan patrick')
        console.log('ini class',$('.zoomPic'))
        console.log('ini id',$('#image-transition'))
        let temp = document.getElementById('image-transition')
        console.log('ini temp', temp)
      },
      checkingSize () {
        window.addEventListener('resize', (e) => {
          this.width = e.target.innerWidth
          this.height = e.target.innerHeight
        })
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.width = x
        this.height = y
      },
    }
  }
</script>

<style>
  .section-1 {
    background-color: #e9e7f1;
    width: 100%;
    height: 100vh;
  }
  .stop-motion {
    width: 100%;
    height: auto!important;
  }
  .video-class {
    height: auto !important;
    -webkit-transition: width 1s; /* Safari */
    -webkit-transition-timing-function: ease-in-out; /* Safari */
    transition: width 1s;
    transition-timing-function: ease-in-out;
  }
  .zoomPic {
    height: auto;
    -webkit-transition: width 1s; /* Safari */
    -webkit-transition-timing-function: ease-in-out; /* Safari */
    transition: width 1s;
    transition-timing-function: ease-in-out;
  }
  /*.loaded .zoomPic{*/
    /*background-size: 100% !important;*/
  /*}*/
  .animate {
    -webkit-animation: mymove 5s; /* Safari 4.0 - 8.0 */
    animation: mymove 5s;
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes mymove {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  /* Standard syntax */
  @keyframes mymove {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
