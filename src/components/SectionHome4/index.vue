<!--<template>-->
  <!--<div class="section-4 row wrap items-start justify-center ">-->
    <!--<div class="col-lg-3 justify-center">-->
      <!--<div class="row wrap justify-center">-->
          <!--<img class="size-image-review" :src="review1" alt="">-->
          <!--<div class="row wrap justify-center">-->
            <!--<q-card-main class="align-center">-->
              <!--<span class="font-size-paragraph-24">Cute PlayMat!</span><br>-->
              <!--<p class="font-size-paragraph-24 font-weight-bold"> Ibu Jessica and Fam</p>-->
            <!--</q-card-main>-->
          <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 justify-center self-end">-->
      <!--<div class="row wrap justify-center">-->
        <!--<img class="size-image-review" :src="review2" alt="">-->
        <!--<div class="row wrap justify-center">-->
          <!--<q-card-main class="align-center">-->
            <!--<span class="font-size-paragraph-24">Children happy play with celimut</span><br>-->
            <!--<p class="font-size-paragraph-24 font-weight-bold"> Ibu Francis and Fam</p>-->
          <!--</q-card-main>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 justify-center">-->
      <!--<div class="row wrap justify-center">-->
        <!--<img class="size-image-review" :src="review1" alt="">-->
        <!--<div class="row wrap justify-center">-->
          <!--<q-card-main class="align-center">-->
            <!--<span class="font-size-paragraph-24">Cute PlayMat!</span><br>-->
            <!--<p class="font-size-paragraph-24 font-weight-bold"> Ibu Jessica and Fam</p>-->
          <!--</q-card-main>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 justify-center self-end">-->
      <!--<div class="row wrap justify-center">-->
        <!--<img class="size-image-review" :src="review2" alt="">-->
        <!--<div class="row wrap justify-center">-->
          <!--<q-card-main class="align-center">-->
            <!--<span class="font-size-paragraph-24">Children happy play with celimut</span><br>-->
            <!--<p class="font-size-paragraph-24 font-weight-bold"> Ibu Francis and Fam</p>-->
          <!--</q-card-main>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<template>
  <div class="section-4 ">
    <div class="row justify-center">
      <h2 class="font-size-header-48 font-weight-normal color-judul">PRESS</h2>
    </div>
    <div class="row wrap items-start justify-left">
      <div class="col-lg-6 col-md-12">
        <img style="width: 100%;height: auto; padding: 36px;" :src="press" alt="">
      </div>
      <div style="padding: 36px" class="col-lg-6 col-md-12">
        <q-card flat >
          <q-card-title class="color-press">
            <h2 class="font-size-36 font-weight-normal">
            Kenalkan budaya Indonesia pada Anak Lewat
            Selimut Bermain
            </h2>
          </q-card-title>
          <q-card-main class="color-isi">
            Banyak cara yang bisa dilakukan orangtua untuk memperkenalkan budaya Indonesia kepada anak. Salah satunya melalui selimut bermain. Berbeda dengan selimut pada umumnya, selimut ini bermotif papan permainan monopoli dan ular tangga. Uniknya dua permainan ini berisikan pengetahuan mengenai budaya nusantara.
            (HAN)
          </q-card-main>
          <q-card-actions style="padding: 16px;">
            As seen on:
            <a class="link-metro" href="http://m.metrotvnews.com/video/selamat-pagi-indonesia/JKREGgxk-kenalkan-budaya-indonesia-pada-anak-lewat-selimut-bermain" target="_blank">
            http://m.metrotvnews.com/video/selamat-pagi-indonesia/JKREGgxk-kenalkan-budaya-indonesia-pada-anak-lewat-selimut-bermain
          </a>
          </q-card-actions>
        </q-card>
      </div>
    </div>

  </div>
</template>

<script>
  import review1 from '../../assets/assets/review-01.png'
  import review2 from '../../assets/assets/review-02.png'
  import press from '../../assets/assets/press.png'
  export default {
    data () {
      return {
        review1,
        review2,
        press
      }
    }
  }
</script>

<style>
  .section-4 {
    background-color: #f7e8e7;
    width: 100%;
    height: auto;
  }
  .size-image-review {
    padding-top: 64px;
    width: 70%;
    height: 70%;
  }
  .color-judul {
    color: #766a77;
  }
  .color-press {
    color: #9698f4;
  }
  .color-isi {
    color: #766a77;
  }
  .link-metro {
    text-decoration: none;
    color: #9698f4;
  }
  .link-metro:hover {
    color: lightseagreen;
  }
  @media only screen and (max-width: 991px) {
    .section-4 {
      background-image: url("../../assets/assets/bg-selimut.jpg");
      width: 100%;
      height: auto;
    }
  }
</style>
