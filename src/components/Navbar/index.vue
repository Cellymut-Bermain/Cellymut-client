<template>
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
      <q-btn v-if="width>991 && loginStatus" no-ripple flat @click="logout"  >
        Logout
      </q-btn>
      <q-btn  no-ripple flat v-if="width<=991" icon="menu" @click="openNav"></q-btn>
      <p style="margin: auto;"> Hi <a class="first_name" @click="toAccount">{{first_name}},</a></p>
      <q-btn flat icon="shopping_cart" @click="shoppingButton" round >
      </q-btn>
    </q-toolbar>
</template>

<script>
  import { openURL } from 'quasar'
  import {logo} from '../../config/images'
  import {color1} from '../../config/color'
  import {mapState} from 'vuex'
  const token = localStorage.getItem('token')
  const first_name = localStorage.getItem('first_name')
  export default {
    name: 'MyLayout',
    data () {
      return {
        logo,
        color1,
        width: 2000,
        height: 2000,
        first_name
      }
    },
    computed: {
      ...mapState([
        'loginStatus'
      ])
    },
    methods: {
      toAccount () {
        this.$router.push('/account/profile')
      },
      shoppingButton () {
        if (token) {

        }
        else {
          this.$router.push('/auth')
        }
      },
      logout () {
        localStorage.clear()
        this.$store.commit('setLoginStatus', false)
        this.$router.push('/auth')
      },
      checkLoginStatus () {
        if (token) {
          this.$store.commit('setLoginStatus', true)
        }
        else {
          this.$store.commit('setLoginStatus', false)
        }
      },
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
      this.checkLoginStatus()
      this.checkingSize()

    }
  }
</script>

<style scoped>
.barName{
  text-decoration: none;
}
  .first_name {
    color: #ec6e82;
    text-decoration: none;
  }
  .first_name:hover {
    text-decoration: underline;
    cursor: pointer;
  }

</style>

