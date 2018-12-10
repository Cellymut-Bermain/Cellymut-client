<template>
  <q-layout-header>
    <q-toolbar id="toolbar-nav" color="transparent" text-color="navbar">
      <a @click="toHome" href="#"><img class="logo-size" :src="logo" alt="logo celimute" ></a>
      <q-toolbar-title>
      </q-toolbar-title>
      <q-btn v-if="width>991" no-ripple flat to="/product"  >
        Produk
      </q-btn>
      <q-btn v-if="width>991" no-ripple flat to="/about" >
        Tentang Kami
      </q-btn>
      <q-btn v-if="width>991" no-ripple flat to="/askme"  >
        Tanya Kami
      </q-btn>
      <q-btn no-ripple flat v-if="width<=991" icon="menu" @click="openNav"></q-btn>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
  import { openURL } from 'quasar'
  import {logo} from '../../config/images'
  import {color1} from '../../config/color'
  export default {
    name: 'MyLayout',
    data () {
      return {
        logo,
        color1,
        width: 2000,
        height: 2000
      }
    },
    methods: {
      toHome() {
        this.$router.push('/')
        // document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("toolbar-nav").style.display = "flex"
      },
      openURL,
      openNav () {
        document.getElementById("toolbar-nav").style.display = "none"
        document.getElementById("mySidenav").style.width = "100%";

        console.log('open nav')
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
    },
    mounted () {
      this.checkingSize()
    }
  }
</script>

<style scoped>
.barName{
  text-decoration: none;
}
</style>

