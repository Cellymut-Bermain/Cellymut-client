<template>
	<div class="section1 ">
		<div class="row justify-center">
			<h1 class="font-size-header-48 font-weight-normal text-navbar">Game Tutorial Ular Tangga</h1>
		</div>
		<div class="row">
			<div class="col-md-6 col-xs-12 col-sm-12">
				
				<div class="column items-start right">
					<div>
						<p class="T1">Tutorial 1</p> 
						<p class="description">
              Pemain (anak-anak dan/atau orang tua) melempar dadu bergantian, angka yang
              terbanyak dapat memainkan permainan terlebih dahulu.
            </p>
					</div>
					<div>
						<p class="T1">Tutorial 2</p>
						<p class="description">
              Permainan dimulai dari kotak angka 1
            </p>
					</div>
					<div>
						<p class="T1">Tutorial 3</p>
						<p class="description">
              Pion bisa dijalankan sesuai dengan angka hasil dari dadu yang sudah dikocok dan
              dilempar.
            </p>
					</div>
				</div>
					<div class="row justify-center" style="margin-bottom: 20px">
						<q-btn @click="openPDF" text-color="white" icon-right="arrow_forward_ios" :no-caps="true" class="btn-lanjut">
              Lihat Selengkapnya
						</q-btn>
					</div>
			</div>
			<div class="col-md-6 col-xs-12 col-sm-12">
				
     <img class="image" :src="gameTutorial2" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import {imageProduct1, gameTutorial2, gambarBaru} from '../../../config/images.js'
export default {
	data(){
		return{
			gameTutorial2: gambarBaru
		}
	},
  methods: {
    openPDF () {
      window.open('https://firebasestorage.googleapis.com/v0/b/cellymut-staging.appspot.com/o/assets%2FGame%20Tutorial%20Ular%20Tangga.pdf?alt=media&token=fe3d6647-81bd-468a-9c3f-3a15ecfcdf5b')
    }
  }
}
</script>
<style scoped>
.image{
	width: 100%;
	height: auto;
}
.section1{
	padding-top: 30px;
  background-color: #cfe1e3;
	height: auto;
}
.test{
	padding: 0
}
.T1{
 width: 137px;
  height: 45px;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #6e819e;
}

.right{
	margin-left: 50px;
	margin-top: 50px;
}
.description{
	/* width: 709px; */
  /* width: 727px; */
  height: 48px;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #6e819e
}
.btn-lanjut{
	width: 245px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
	background-color: #ec6e82;
	margin-top:50px;
}
@media only screen and (max-width:400px){
	.btn-lanjut{
		margin-bottom: 30px;
		margin-top: 60px;
	}
	.description{
		font-size: 16px;
		margin-right: 16px;
		margin-top: -27px;
		margin-bottom: 24px;
	}
	.T1{
		font-size: 16px;
	}
}
</style>

