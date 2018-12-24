<template>
    <q-page class="flex">
      <SectionHome1 class="margin-top" />
      <SectionHome2 />
      <SectionHome3 />
      <SectionHome4 />
      <!--<SectionHome5 />-->
      <Footer />
      <!--<Anime />-->
    </q-page>
</template>

<style>
</style>

<script>
  import SectionHome1 from '../components/SectionHome1'
  import SectionHome2 from '../components/SectionHome2'
  import SectionHome3 from '../components/SectionHome3'
  import SectionHome4 from '../components/SectionHome4'
  import SectionHome5 from '../components/SectionHome5'
  // import Anime from './Anime'
  import Footer from '../components/Footer/index.vue'
export default {
  name: 'PageIndex',
  components: {
    SectionHome1,
    SectionHome2,
    SectionHome3,
    SectionHome4,
    SectionHome5,
    Footer
  }
}
</script>

<style>
  .margin-top {
    margin-top: -104.7px;
  }
</style>
