<template>
  <div style="width: 100%; margin-top: 70px" >
    <q-card flat>
      <q-card-title>
        <h1 class="align-center font-weight-normal font-size-header-48 from-left" style="color: #766a77">Tanya Kami</h1>
      </q-card-title>

        <div class="row wrap items-start justify-center">


          <div class="col-lg-6 padding-outside-card padding-right-32 padding-top-16 padding-bottom-16 padding-0 from-bottom">
            <div class="row wrap justify-center">
            <q-card  class="padding-card card-color-1" style="width:100%">
              <q-card-main>
                <p class="font-size-subheader-28 align-center font-weight-normal ">
                  Bisakah saya menukarkan atau
                  mengembalikan produk saya?
                </p>
                <p class="font-size-paragraph-24 align-center font-weight-normal">
                  Semua pembelian tidak dapat ditukarkan atau dikembalikan. Jika rusak dalam perjalanan,
                  garansi 2 minggu setelah pembelian.
                </p>
              </q-card-main>
            </q-card>
            </div>
          </div>

          <div class="col-lg-6 padding-outside-card padding-left-32 padding-top-16 padding-bottom-16 padding-0 from-bottom">
            <div class="row wrap justify-center">
              <q-card class="padding-card card-color-2" style="width:100%">
                <q-card-main>
                  <p class="font-size-subheader-28 align-center">
                    Bagian mana dari produk yang dapat saya customize?
                  </p>
                  <p class="font-size-paragraph-24 align-center">
                    Monopoli: Ukuran, nama dan warna selimut <br>
                    Ular Tangga: Ukuran, nama, warna selimut dan warna papan
                  </p>
                </q-card-main>
              </q-card>
            </div>
          </div>
        </div>


        <div class="row wrap items-start justify-center">

          <div class="col-lg-6 padding-outside-card padding-right-32 padding-top-16 padding-bottom-16 padding-0">
            <div class="row wrap justify-center">
              <q-card class="padding-card card-color-3" style="width:100%">
                <q-card-main>
                  <p class="font-size-subheader-28 align-center">
                    Di mana saya dapat menemukan foto-foto rumah tradisional yang akan digunakan dalam permainan Monopoli?
                  </p>
                  <p class="font-size-paragraph-24 align-center">
                    Anda dapat mengunduh dan mencetak gambar di sini
                  </p>
                </q-card-main>
              </q-card>
            </div>
          </div>


          <div class="col-lg-6 padding-outside-card padding-left-32 padding-top-16 padding-bottom-16 padding-0">
            <div class="row wrap justify-center">
              <q-card class="padding-card card-color-4" style="width:100%">
                <q-card-main>
                  <p class="font-size-subheader-28 align-center">
                    Bisakah saya mendapatkan kartu tantangan baru untuk permainan Ular Tangga?
                  </p>
                  <p class="font-size-paragraph-24 align-center">
                    Ya, satu set kartu tantangan baru untuk permainan Ular Tangga akan tersedia untuk diunduh setiap 6 bulan
                  </p>
                </q-card-main>
              </q-card>
            </div>
          </div>


        </div>
    </q-card>
  </div>
</template>

<script>

</script>

<style>
  .padding-card {
    padding: 64px;
  }
  .padding-outside-card {
    padding: 64px;
  }
  .padding-left-32 {
    padding-left: 16px !important;
  }
  .padding-right-32 {
    padding-right: 16px !important;
  }
  .padding-top-16 {
    padding-top: 16px;
  }
  .padding-bottom-16 {
    padding-bottom: 16px;
  }
  .text-color-white {
    color: white ;
  }
  .card-color-1 {
    background-color: #eddbde;
    color: #ffffff;
  }
  .card-color-2 {
    background-color: #a7b5d8;
    color: #ffffff;
  }
  .card-color-3 {
    background-color: #cbdbee;
    color: #ffffff;
  }
  .card-color-4 {
    background-color: #e9bcb8;
    color: #ffffff;
  }

  @media only screen and (max-width: 992px) {
    .padding-0 {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

  }

  .from-bottom {
    animation: from-bottom 2s;
  }
  
  @keyframes from-bottom {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0%;
    }
  }
  .from-left {
    animation: from-left 2s;
  }

  @keyframes from-left {
    from {
      margin-left: 100%;
    }
    to {
      margin-bottom: 0%;
    }
  }



</style>
