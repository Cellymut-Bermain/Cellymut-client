<template>
  <q-page class="flex">
      <AboutCellymutSection1/>
      <!--<Review />-->
      <!--<AboutCellymutSection2/>-->
    <YouMightLike/>
    <Footer />
  </q-page>
</template>

<script>
  import AboutCellymutSection1 from '../components/AboutCellymutSection1'
  import AboutCellymutSection2 from '../components/AboutCellymutSection2'
  import Review from '../components/SectionHome4'
  import YouMightLike from '../components/YouMightLike'
  import Footer from '../components/Footer/index.vue'
  export default {
    components: {
      AboutCellymutSection1, AboutCellymutSection2, Review, YouMightLike, Footer
    },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
