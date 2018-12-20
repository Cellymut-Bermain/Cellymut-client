<template>
    <q-page>
        <ProductDetailSection1/>
        <!--<ProductDetailSection2/>-->
      <Footer />
    </q-page>
</template>

<script>
import ProductDetailSection1 from '../components/ProductComponents/ProductDetailSection1'
import ProductDetailSection2 from '../components/ProductComponents/ProductDetailSection2'
import Footer from '../components/Footer/index.vue'
export default {
    components: {
      ProductDetailSection1,
      ProductDetailSection2,
      Footer
    }
}
</script>


