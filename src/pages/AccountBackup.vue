<template>
  <div style="width: 100%" class="margin-navbar-top-mobile">
    <div class="row wrap items-stretch">
      <div v-if="width>991" class="col-2">
        <h2 class="akun-saya color2">Akun Saya</h2>
        <div class="nav-saya">

          <div v-for="(button, index) in buttons" :key="index">
            <!--<q-btn v-if="page===button.name_route" no-wrap class="color2 header-left" @click="toUrl(button.name_route)"  :to="button.url" flat>-->
              <!--{{button.name}}-->
            <!--</q-btn>-->
            <!--<q-btn v-if="page!==button.name_route" no-wrap class="color2"  @click="toUrl(button.name_route)"  :to="button.url" flat>-->
              <!--{{button.name}}-->
            <!--</q-btn>-->
            <div style="width: 100%">
              <div v-if="page===button.name_route" class="wrapper-nav header-left" @click="toUrl({value: button.name_route, url: button.url })">
                <a  class="color2 link-nav" @click="toUrl({value: button.name_route, url: button.url })">
                  {{button.name}}
                </a>
              </div>
            </div>
            <div style="width: 100%">
              <div v-if="page!==button.name_route" class="wrapper-nav" @click="toUrl({value: button.name_route, url: button.url })">
                <a class="color2 link-nav" @click="toUrl({value: button.name_route, url: button.url })">
                  {{button.name}}
                </a>
              </div>
            </div>
          </div>

          <div >
            <div style="width: 100%">
              <div v-if="page==='Updates'" class="wrapper-nav header-left" @click="toUrl({value: 'Updates', url:'Updates' })">
                <a  class="color2 link-nav" @click="toUrl({value: button.name_route, url: button.url })">
                  Updates ({{unreadUpdates.length}})
                </a>
              </div>
            </div>
            <div style="width: 100%">
              <div v-if="page!=='Updates'" class="wrapper-nav" @click="toUrl({value: 'Updates', url: '/account/inbox' })">
                <a class="color2 link-nav" @click="toUrl({value: 'Updates', url: 'Updates' })">
                  Updates
                </a>
              </div>
            </div>
          </div>
          <br><br>
          <q-btn flat @click="logout"  color="red" >keluar</q-btn>
        </div>
      </div>
      <div v-if="page!=='account-order'" class="col-lg-8 col-md-12 margin-left-4-rem akun-saya "   >
        <div  class="row wrap justify-center items-start padding-mobile-setting">
        <router-view/>
        </div>
      </div>

      <div v-if="page=='account-order'" class="col-lg-8 col-md-12 margin-left-4-rem akun-saya"  style="margin-left: 20px"   >
        <div class="row wrap justify-center items-start padding-mobile-setting">
          <router-view/>
        </div>
      </div>
    </div>
    <!--<Footer />-->
  </div>
</template>
<script>
  const token = localStorage.getItem('token')
  import Footer from '../components/Footer/index.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      Footer
    },
    mounted () {
      this.checkingSize()
      this.checkingToken(token)
      this.$store.dispatch('fetchingUnreadUpdates')
      console.log('ini routenya', this.$route.name)
    },
    computed: {
      ...mapState([
        'page', 'unreadUpdates'
      ]),
    },
    methods: {
      toUrl ({value, url}){
        this.$store.commit('setPage', value)
        console.log(value, url)
        this.$router.push(url)
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
      checkingToken (token) {
        if (!token)  {
          this.$router.push('/')
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
              swal("Berhasil keluar!!", {
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
    },
    data () {
      return {
        width: 0,
        height: 0,
        buttons : [
          {
            url: '/account/setting',
            name: 'Data Diri',
            name_route: 'account-setting'
          },
          {
            url: '/account/keranjang',
            name: 'Keranjang Belanja',
            name_route: 'account-keranjang'
          },
          {
            url: '/account/order',
            name: 'Pesanan Saya',
            name_route: 'account-order'
          },
          // {
          //   url: '/account/inbox',
          //   name: 'Updates'
          // }
        ]
        // buttons: ['Profil', 'Keranjang Belanja', 'Akun Setting', 'Pesanan Saya', 'Change Password', 'Inbox']
      }
    }
  }
</script>

<style>
  .margin-left-4-rem {
    margin-left: 4rem;
  }
  .akun-saya {
    padding: 0 !important;
    margin: 0 !important;
    font-size: 24px;
    font-weight: 500;
    margin-left: 3rem !important;
    margin-top: 2rem !important;
  }
  .nav-saya {
    margin-top: 2.5rem;
    margin-left: 2rem;
  }
  .header-left {
    border-bottom: 3px solid #8c78de;
    margin-bottom: 2px;
  }
  .link-nav {
    cursor: pointer;
  }
  .link-nav:hover {
  }
  .wrapper-nav {
    margin-left: 16px;
    width: 80%;
    background-color: white;
    padding-bottom: 1rem;
    padding-top: 1rem;
    cursor: pointer;
  }
  .wrapper-nav:hover {
    background-color: whitesmoke;
  }

  @media only screen and (max-width: 992px) {
    .margin-navbar-top-mobile {
      margin-top: 32px;
    }
    .margin-left-4-rem {
      margin-left: 1.2rem !important;
    }
    .padding-mobile-setting {
      padding: 2rem;
    }
  }

</style>
<!--<style>-->
  <!--.item2 { grid-area: menu; }-->
  <!--.item3 { grid-area: main; }-->
  <!--.item5 { grid-area: footer; }-->

  <!--.grid-container {-->
    <!--display: grid;-->
    <!--grid-template-areas:-->
      <!--'menu main main main main main'-->
      <!--'footer footer footer footer footer footer';-->
    <!--grid-gap: 10px;-->
    <!--padding: 10px;-->
  <!--}-->

  <!--.grid-container > div {-->
    <!--background-color: white;-->
    <!--text-align: center;-->
    <!--padding: 20px 0;-->
    <!--font-size: 30px;-->
  <!--}-->

  <!--@media only screen and (max-width: 992px) {-->
    <!--.item3 { grid-area: main; }-->
    <!--.item5 { grid-area: footer; }-->

    <!--.grid-container {-->
      <!--display: grid;-->
      <!--grid-template-areas:-->
        <!--'main main main main main main'-->
        <!--'footer footer footer footer footer footer';-->
      <!--grid-gap: 10px;-->
      <!--padding: 10px;-->
    <!--}-->

    <!--.grid-container > div {-->
      <!--background-color: white;-->
      <!--text-align: center;-->
      <!--padding: 20px 0;-->
      <!--font-size: 30px;-->
    <!--}-->
  <!--}-->
<!--</style>-->
