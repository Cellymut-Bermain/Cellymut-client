<template>
  <q-page>
    <AskMeSection1 />
    <!--<AskMeSection2 />-->
    <YouMightlike />
    <Footer />
  </q-page>
</template>

<script>
  import AskMeSection1 from '../components/AskMeSection1/index'
  import AskMeSection2 from '../components/AskMeSection2/index'
  import YouMightlike from '../components/YouMightLike'
  import Footer from '../components/Footer/index.vue'
export default {
  components: {
    AskMeSection1, AskMeSection2, YouMightlike, Footer
  },
  data () {
    return {}

  }
}
</script>

<style>

</style>
