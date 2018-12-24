<template>
      <q-layout view="lHh Lpr lFf">
        <q-layout-header class="remove-shaddow">
          <Navbar />
          <SideNavbar />
        </q-layout-header>
        <q-page-container >
          <transition>
            <router-view />
          </transition>
        </q-page-container>
        <!--<Footer />-->
        <ModalPreload />
      </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import logo from '../assets/assets/logo-cellimut.png'
import Footer from '../components/Footer/index.vue'
import ModalPreload from '../pages/ModalPreload'
export default {
  name: 'MyLayout',
  components: {
    Navbar, SideNavbar, Footer, ModalPreload
  },
  data () {
    return {
      logo: logo,
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
    if (this.$route.name!=='home'){
      this.$store.commit('setWidthEnded', true)
    }
  }
}
</script>

<style>
  .remove-shaddow {
    box-shadow: 0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0), 0 0px 0px 0px rgba(0,0,0,0);
    -webkit-box-shadow: 0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0), 0 0px 0px 0px rgba(0,0,0,0);
  }

</style>
