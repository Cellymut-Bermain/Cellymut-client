<template>
    <q-toolbar style="padding-right: 28px !important;"  id="toolbar-nav" :color="color" text-color="navbar">
      <a @click="toHome" href="#"><img class="logo-size logo-margin"  :src="logo" alt="logo celimut" ></a>
      <q-toolbar-title>
      </q-toolbar-title>

      <q-btn  v-if="width>991 && this.page=='home'" no-ripple flat to="/" class="header-bottom" >
        Home
      </q-btn>
      <q-btn @click="pindahPage('home')" v-if="width>991 && this.page!=='home'" no-ripple flat to="/"  >
        Home
      </q-btn>


      <q-btn @click="pindahPage('product')" v-if="width>991 && this.page=='product'" no-ripple flat to="/product" class="header-bottom" >
        Tutorial
      </q-btn>
      <q-btn @click="pindahPage('product')" v-if="width>991 && this.page!=='product'" no-ripple flat to="/product"  >
        Tutorial
      </q-btn>


      <q-btn @click="pindahPage('about')" v-if="width>991 && this.page=='about'" no-ripple flat to="/about" class="header-bottom" >
        Tentang Kami
      </q-btn>
      <q-btn @click="pindahPage('about')" v-if="width>991 && this.page!=='about'" no-ripple flat to="/about" >
        Tentang Kami
      </q-btn>


      <q-btn @click="pindahPage('askme')" v-if="width>991 && this.page=='askme'" no-ripple flat to="/askme" class="header-bottom" >
        Tanya Kami
      </q-btn>
      <q-btn @click="pindahPage('askme')" v-if="width>991 && this.page!=='askme'" no-ripple flat to="/askme"  >
        Tanya Kami
      </q-btn>

      <q-btn @click="pindahPage('auth')" v-if="width>991 && !loginStatus && this.page=='auth'" no-ripple flat to="/auth" class="header-bottom"  >
        Masuk
      </q-btn>
      <q-btn @click="pindahPage('auth')" v-if="width>991 && !loginStatus && this.page!=='auth'" no-ripple flat to="/auth"  >
        Masuk
      </q-btn>

      <!--<q-btn v-if="width>991 && loginStatus" no-ripple flat @click="logout"  >-->
        <!--Keluar-->
      <!--</q-btn>-->
      <q-btn  no-ripple flat v-if="width<=991" icon="menu" @click="openNav"></q-btn>
      <p  v-if="width>991 && loginStatus && user && this.page=='account'" style="margin: auto;" class="header-bottom"> Hi <a class="first_name" @click="toAccount">{{user.first_name}},</a></p>
      <p  v-if="width>991 && loginStatus && user && this.page!=='account'" style="margin: auto;"> Hi <a class="first_name " @click="toAccount">{{user.first_name}},</a></p>
      <p  v-if="width>991 && loginStatus && !user" style="margin: auto;"> Hi <a class="first_name" @click="toAccount">User,</a></p>
      <q-btn flat icon="shopping_cart" @click="shoppingButton" round >
        <q-chip v-if="cart.length" floating color="red">{{cart.length}}</q-chip>
      </q-btn>
    </q-toolbar>
</template>

<script>
  import { openURL } from 'quasar'
  import {logo} from '../../config/images'
  import {color1} from '../../config/color'
  import {mapState} from 'vuex'
  const first_name = localStorage.getItem('first_name')
  import $ from 'jquery'
  export default {
    name: 'MyLayout',
    data () {
      return {
        logo,
        color1,
        width: 2000,
        height: 2000,
        first_name: first_name,
        color: 'transparent',
      }
    },
    computed: {
      ...mapState([
        'loginStatus', 'cart', 'user', 'token', 'page'
      ]),
    },
    methods: {
      onScroll () {
        let self = this
        $(window).scroll(function() {
          let temp = $(window).scrollTop()
          if (temp>50)  {
            self.color = 'white'
          }
          else if(temp<=50) {
            self.color = 'transparent'
          }
        })
      },
      toAccount () {
        this.$store.commit('setPage', 'account')
        this.$router.push('/account/setting')
      },
      shoppingButton () {
        if (this.token) {
          this.$router.push('/account/keranjang')
          this.$store.commit('setPage', 'account')
        }
        else {
          this.$router.push('/auth')
        }
      },
      logout () {
        swal({
          title: "Apakah anda yakin?",
          text: "Ketika anda keluar anda tidak bisa melihat beberapa fitur",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Berhasil Logout!!", {
                icon: "success",
              })
                .then(()=> {
                  localStorage.clear()
                  this.$store.commit('setLoginStatus', false)
                  this.$store.commit('removeToken', null)
                  this.$store.commit('removeUser', null)
                  this.$store.commit('emptyCart')
                  this.$router.push('/auth')
                })
            }
          });
      },
      checkLoginStatus () {
        const token = localStorage.getItem('token')
        if (token) {
          this.$store.commit('setLoginStatus', true)
        }
        else {
          this.$store.commit('setLoginStatus', false)
        }
      },
      toHome() {
        this.$store.commit('setPage', 'home')
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
      },
      checkPage () {
        this.$store.commit('setPage', this.$route.name)
      },
      pindahPage (value) {
        this.$store.commit('setPage', value)
        console.log('page', this.page)
      }

    },
    created () {
      const first_name = localStorage.getItem('first_name')
      this.first_name = first_name
      this.checkLoginStatus()
      this.checkingSize()

    },
    mounted () {
      const token = localStorage.getItem('token')
      let tempGet = localStorage.getItem('first_name')
      let parsed = JSON.parse(tempGet)
      this.$store.commit('setToken', token)
      this.$store.commit('setUser', parsed)
      this.onScroll()
      this.$store.dispatch('fetchingCart')
      this.checkPage()
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
  .header-bottom {
    border-bottom: 3px solid #8c78de;
    margin-bottom: 2px;
    /*pointer-events: none;*/
  }
  .logo-margin {
    margin-left: 2rem;
  }


</style>

