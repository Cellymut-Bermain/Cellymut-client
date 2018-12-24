<template>
  <div class="section-suka">
    <div class="row wrap justify-center">
      <h2 class="font-size-header-48 font-weight-normal color-text-pilihan">Pilihan Produk</h2>
    </div>
    <div class="row wrap justify-center">
      <div class="col-lg-4 col-md-12">
          <img :src="logo" alt="Avatar" class="image" style="width:100%">
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="container">
          <img :src="monopoly1" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="row wrap justify-center">
              <h2 class="font-size-header-48 font-weight-normal color-item">
                Monopoly Cellymut
              </h2>
            </div>
            <div class="row wrap justify-center">
              <q-btn @click="toDetail('1')" class="btn-product" text-color="white">
                <q-icon name="shopping_cart" />
                Tambah Keranjang
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="container">
          <img :src="ular_tangga1" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="row wrap justify-center">
              <h2 class="font-size-header-48 font-weight-normal color-item">
                Ular Tangga Cellymut
              </h2>
            </div>
            <div class="row wrap justify-center">
              <q-btn @click="toDetail('2')" class="btn-product" text-color="white">
                <q-icon name="shopping_cart" />
                Tambah Keranjang
              </q-btn>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import logo from '../../assets/assets/logofix_.png'
  import monopoly1 from '../../assets/assets/pilihan-01.png'
  import ular_tangga1 from '../../assets/assets/ulartangga-01.png'
  export default {
    data() {
      return {
        logo,
        monopoly1,
        ular_tangga1
      }
    },
    computed: {
      token: {
        get () {
          return this.$store.state.token
        }
      }
    },
    methods: {
      toDetail(value) {
        if (!this.token) {
          return this.$q.notify({
            message: "You have to login first!",
            timeout: 2000,
            color: 'positive',
            position: 'center'
          })
        }
        this.$router.push('/detail/'+value)
      }
    }
  }
</script>

<style>
  .section-suka {
    background-color: #e9e7f1;
    width: 100%;
    height: auto;
  }
  .color-text-pilihan {
    color: #766a77;
  }
  .color-item {
    color: #ec6e82;
  }
  .btn-product {
    width: 80%;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #ec6e82;
  }

  .container {
    position: relative;
    width: 90%;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
  @media only screen and (max-width: 992px) {
    .container {
      position: relative;
      width: 100%;
      padding: 24px;
    }
  }
</style>
