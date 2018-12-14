<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <Navbar />
      <SideNavbar />
    </q-layout-header>
    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import logo from '../assets/assets/logo-cellimut.png'
export default {
  name: 'MyLayout',
  components: {
    Navbar, SideNavbar
  },
  data () {
    return {
      logo: logo
    }
  },
  methods: {
    openURL,
  },
  mounted () {
  }
}
</script>

<style>
</style>
