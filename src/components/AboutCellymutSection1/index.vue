<template>
    <div >
      <h1 v-if="width<=991" class="font-size-header-48 text-about-section-1 align-center font-weight-normal">Tentang Cellymut Bermain</h1>
      <img class="size-image-tentang-kami" :src="tentangKami" alt="">
      <div class="row wrap justify-center">
        <q-card flat class="card-width-max" style="padding-bottom: 64px !important;">
          <q-card-title>
            <h1 v-if="width>992" class="font-size-header-48 text-about-section-1 align-center font-weight-normal">Tentang Cellymut Bermain</h1>
          </q-card-title>
          <q-card-main>
            <p  class="align-center text-about-section-1 paragraph-about padding-mobile">
              Cellymut Bermain adalah 100% produk Indonesia yang ramah anak, merupakan buah kreasi
              Jane Permana yang memiliki dua anak balita. Seberapapun sibuk hari-harinya sebagai wanita karir,
              Jane Permana tetap merasa bahwa bermain merupakan kebutuhan anak yang tidak boleh dikurangi, dan mainan
              terbaik menurutnya adalah yang dapat memperkuat bonding sekaligus mengajarkan ilmu pengetahuan dan positivity.
              Lahirlah Cellymut Bermain yang bisa digunakan untuk bonding time bersama anak-anaknya sebelum waktu tidur mereka.
              Cellymut Bermain selain terbuat dari bahan katun yang lembut dan nyaman, dijahit dengan penuh cinta kasih
              oleh Oma Mariana. Cellymut Bermain memiliki desain dan warna yang ceria. Perpaduan estetika dan kreatifitas
              yg praktis ini menjadikan Cellymut Bermain pilihan bagi setiap ibu-ibu yang ingin memperkuat family bonding dengan
              buah hati mereka.
            </p>
            <!--<p v-if="width>992" class="align-center text-about-section-1 paragraph-about padding-mobile">-->
              <!--Cellymut Bermain selain terbuat dari bahan katun yang lembut dan nyaman, dijahit dengan penuh cinta kasih-->
              <!--oleh Oma Mariana. Cellymut Bermain memiliki desain dan warna yang ceria. Perpaduan estetika dan kreatifitas-->
              <!--yg praktis ini menjadikan Cellymut Bermain pilihan bagi setiap ibu-ibu yang ingin memperkuat family bonding dengan-->
              <!--buah hati mereka.-->
            <!--</p>-->
            <p v-if="width>992" class="align-center text-about-section-1 paragraph-about padding-mobile">
              Di tengah-tengah perkembangan teknologi, kebanyakan anak-anak lebih memilih bermain dengan gadget. Tetapi,
              Jane Permana merasa bahwa teknologi gadget tidak dapat menggantikan dinamika interaksi yang diperoleh dari
              permainan konvensional seperti yang ia pernah kenal di masa kecilnya dulu; khususnya
              permainan yg mengajarkan keragaman budaya Indonesia. Hal ini memperkuat
              keinginannya untuk berbagi kreatifitas inovasinya dengan sesama orang tua yang
              dinamis yang ingin mempererat hubungan dengan anaknya.
              Pada waktu itulah lahir misi Cellymut Bermain, yaitu mengajarkan anak-anak
              mengenai budaya Indonesia melalui permainan yang ada pada selimut,
              memperkuat hubungan keluarga,dan mengurangi penggunaan gadget sebelum
              tidur, dan mengajarkan positivity serta empati.
            </p>
            <!--<p v-if="width>992" class="align-center text-about-section-1 paragraph-about padding-mobile">-->
              <!--Pada waktu itulah lahir misi Cellymut Bermain, yaitu mengajarkan anak-anak-->
              <!--mengenai budaya Indonesia melalui permainan yang ada pada selimut,-->
              <!--memperkuat hubungan keluarga,dan mengurangi penggunaan gadget sebelum-->
              <!--tidur, dan mengajarkan positivity serta empati.-->
            <!--</p>-->
          </q-card-main>
          <!--<q-card-actions align="center">-->
            <!--<q-btn text-color="white" class="style-button-about" no-caps>-->
              <!--Lebih Lanjut-->
              <!--<q-icon class="icon-margin" name="chevron_right" />-->
            <!--</q-btn>-->
          <!--</q-card-actions>-->
        </q-card>
      </div>
    </div>
</template>


<script>
  import tentangKami from '../../assets/assets/Cellymut_Tentang_Kami.jpg'
  export default {
    data () {
      return {
        tentangKami,
        width: null,
        height: null
      }
    },
    methods: {
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
      }
    },
    mounted () {
      this.checkingSize()
    }
  }
</script>

<style>
  .section-about-1 {
    background-color: red;
    width: 100%;
    height: auto !important;
  }
  .size-image-tentang-kami {
    width: 100%;
    height: auto;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .margin-image {
    margin-top: 120px;
  }
  .card-width-max {
    width: 100%;
  }
  .paragraph-about {
    font-size: 14.28px;
    padding-left: 120px;
    padding-right: 120px;
  }
  .style-button-about {
    width: 245px;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #ec6e82;
  }
  .icon-margin {
    margin-left: 24px;
  }
  @media only screen and (max-width: 992px) {
    .padding-mobile {
      padding-left: 8px;
      padding-right: 8px;
    }
  }

</style>
