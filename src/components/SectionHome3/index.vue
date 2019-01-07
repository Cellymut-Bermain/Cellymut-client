<template>
  <div class="section-3 row wrap items-center justify-center ">
    <div v-if="width>991" class="col-lg-5 justify-center">
      <div class="row wrap justify-center">
        <img class="size-ular-image" :src="ular_tangga1" alt="">
      </div>
    </div>
    <div v-if="width>991" class="col-lg-2 justify-center">
      <div class="row wrap justify-center">
        <img class="size-ular" :src="ular_tangga2" alt="">
      </div>
      <div class="row wrap justify-center">
        <img class="size-ular" :src="ular_tangga3" alt="">
      </div>
    </div>
    <div  class="col-lg-5 justify-center">
      <div class="row wrap justify-center">
        <q-card flat>
          <q-card-title class="text-section3 ">
            <h1 style="text-align: center" class="font-size-subheader-28 font-weight-normal text-animate">ULAR TANGGA CELLYMUT</h1>
          </q-card-title>
          <q-card-main align="center" class="text-section3 font-size-subheader-18 font-weight-normal" style="padding-left: 64px; padding-right: 64px">
            <p class="font-weight-normal">
              Included with the purchase of this product: Kartu kesempatan, Kartu petunjuk,
              Kartu hak sewa rumah, Boneka dadu besar, Uang monopoli
            </p>
          </q-card-main>
          <q-card-actions align="center" >
            <q-btn icon="shopping_cart" text-color="white" no-caps class="style-button-3" @click="toDetailProduct">Tambah ke Keranjang </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import ular_tangga1 from '../../assets/assets/ulartangga-01.png'
  import ular_tangga2 from '../../assets/assets/ulartangga-02.png'
  import ular_tangga3 from '../../assets/assets/ulartangga-03.png'
  const token = localStorage.getItem('token')
  export default {
    mounted () {
      this.checkingSize()
    },
    data () {
      return {
        ular_tangga1,
        ular_tangga2,
        ular_tangga3,
        width: 2000,
        height: 2000,
      }
    },
    computed: {
      token : {
        get () {
          return this.$store.state.token
        }
      }
    },
    methods: {
      toDetailProduct () {
        if (!this.token) {
          // this.$router.push('/auth')
          this.$q.notify({
            message: "You have to login first!",
            timeout: 2000,
            color: 'positive',
            position: 'center'
          })
        }
        else {
          this.$router.push('/detail/2')
        }
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
      }
    }
  }
</script>

<style>
  .section-3 {
    background-color: #cfe1e3;
    width: 100%;
    height: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .size-ular-image {
    width: 517px;
    height: 341px;
  }
  .size-ular {
    width: 100%;
    height: 100%;
    padding: 12px
  }
  .style-button-3 {
    width: 80%;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #6e819e;
  }

  .text-animate {
    animation: text-animate 2s;
  }

  
  @keyframes text-animate {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 0%;
    }
  }
</style>
