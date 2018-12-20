<template>
  <div class="section-5 row wrap items-center justify-center ">
    <div v-if="!token" class="col-lg-6 justify-center">
      <div class="row wrap justify-center">
        <img class="size-image-komunitas" :src="komunitas" alt="">
      </div>
    </div>
    <div v-if="token" class="col-lg-12 justify-center">
      <div class="row wrap justify-center">
        <img style="width: 50%; height: auto;" class="size-image-komunitas" :src="komunitas" alt="">
      </div>
    </div>
    <div class="col-lg-4 justify-center">
        <div class="row wrap justify-center">
          <p class="font-size-paragraph-28 font-weight-normal" style="color: #6c6c6c;" v-if="!token" > Gabung di komunitas Cellymut Sekarang! </p>
        </div>
        <div class="row wrap justify-center">
          <q-card-actions v-if="!token" >
            <q-btn @click="toRegister" no-caps text-color="white" class="style-button-5"> Gabung Sekarang! </q-btn>
          </q-card-actions>
        </div>
    </div>
  </div>
</template>

<script>
  import komunitas from '../../assets/assets/komunitas-01.png'
  const token = localStorage.getItem('token')
  export default {
    data () {
      return {
        komunitas,
        token
      }
    },
    methods: {
      toRegister () {
        this.$router.push('/auth')
      }
    }
  }
</script>

<style>
  .section-5 {
    background-color: #cfe1e3;
    width: 100%;
    height: 500px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .size-image-komunitas {
    width: 90%;
    height: 90%;
  }
  .style-button-5 {
    width: 172.8px;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #a7b5d8;
  }

</style>
