<template>
  <div>

    <div v-if="width>991" class="section-1 row wrap items-center justify-center">
      <div class="col-lg-8 col-md-8 col-sm-12" >
        <img class="stop-motion" :src="stopMotion" alt="">
      </div>

      <div class="col-lg-4 col-md-8 col-sm-12 justify-center padding-right-28 font-weight-normal" >
        <q-card flat>
          <q-card-title align="right" class="text-navbar">
            <h1 class="font-size-header-48 font-weight-normal">Hallo Bunda dan Ayah</h1>
          </q-card-title>
          <q-card-main align="right" class="text-navbar font-size-subheader-28 font-weight-normal">
            <p class="font-weight-normal"> {{textMain}} </p>
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
  export default {
    mounted () {
      this.checkingSize()
    },
    data () {
      return {
        stopMotion,
        textMain: 'Cellymut Bermain adalah 100% produk Indonesia yang ramah anak, merupakan buah kreasi ' +
          'Jane Permana yang memiliki dua anak balita.',
        logo,
        width: 2000,
        height: 2000
      }
    },
    methods: {
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
      }
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
    height: auto;
  }
</style>
