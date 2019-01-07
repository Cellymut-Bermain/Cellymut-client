<template>
	<div class="section1 row">
			<div class="col-lg-7 col-md-12">
				<div class="container">
					<img v-if="productDetail"  :src="productDetail.item_image" width="100%" alt="">
					<!--<div class="row wrap justify-around show">-->
						<!--<div class="col-4">-->
							<!--<img  :src="ularTangga" width="100px" height="87px" alt="" class="image">-->
						<!--</div>-->
						<!--<div class="col-4">-->
							<!--<img  :src="pilihan3" width="100px" height="87px" alt="" class="image">-->
						<!--</div>-->
							<!--<div class="col-4">-->
							<!--<img  :src="pilihan3" width="100px" height="87px" alt="" class="image">-->
						<!--</div>-->
					<!--</div>		-->
				</div>
				
			</div>
			<div class="col-md-5 col-xs-12 col-sm-12">
				<q-card flat>
					<q-card-title align="left" class="text-navbar">
						<h1 v-if="productDetail" class="font-size-header-48 font-weight-normal"> {{productDetail.item_name}} </h1>
						<h1 v-if="productDetail" class="font-size-header-48 font-weight-normal">Rp.{{productDetail.item_price | parsedMoney}}</h1>
					</q-card-title>
					<q-card-main class="row">
						<div class="row wrap col-md-3 col-xs-12 col-sm-12">
							<div class="column">
								<p class="text-navbar font-size-subheader-28 font-weight-normal">Size</p>
								<q-select
                  style="margin-top: -14px"
                  float-label="Select Size"
								v-model="size"
								:options="selectOptions"
                @input="newVal(size)"
                  class="cursor"
								/>
							</div>
						</div>
						<div class="row wrap col-md-9 col-xs-12 col-sm-12">
							<div class="column">
								<p class="text-navbar font-size-subheader-28 font-weight-normal">Name</p>
									<!-- <q-input class="inputText" v-model="text" placeholder="Your Name" /> -->
                <q-tooltip>Nama ini akan tertera di Cellymut anda</q-tooltip>
									<input v-model="name" type="text" placeholder="Your Name" class="inputText">
							</div>
						</div>
					</q-card-main>

					<q-card-main>
						<div class="column">
						<p class="text-navbar font-size-subheader-28 font-weight-normal">Color</p>

						<div v-if="colors.length>0" class="row">
							<div v-for="(color,index) in colors" :key=index>
								<img class="image-click" :src="color" width="35px" height="35px" alt=""><br>
                <q-radio v-if="radioCheck" @input="chooseColor(color)" style="margin: auto; margin-left: 8px" v-model="option" :val="color"/>
							</div>
						</div>

              <div v-if="colors.length==0" class="row text-navbar">
                <h2 class="font-size-header-48 font-weight-normal">Mohon Maaf Stock Habis untuk ukuran ini</h2>
              </div>

              <br>
              <p class="text-navbar" style="font-weight: 500">Warna yang tersedia</p>
							<!--<button class="light disabled btn-sold">Sold Out</button><br><br>-->
              <q-card-actions style="padding-left: 0px">
                <q-btn v-if="colors.length>0" @click="addToCart" color="primary"> Add to Cart </q-btn>
                <q-btn v-if="colors.length===0" disabled no-ripple> Soldout </q-btn>
              </q-card-actions>
							<p>Included with the purchase of this product:</p>
							<ul>
								<li>
									Kartu tantangan
								</li>
								<li>
									Boneka Ular
								</li>
								<li>
									Boneka Dadu Kecil
								</li>
								<li>
									Kartu balita (untuk pembelian selimut ular tangga untuk anak balita)
								</li>
							</ul>

						</div>
					</q-card-main>
      	</q-card>
			</div>
	</div>
</template>
<script>
import {
  ularTangga,pilihan3, blush, cedar, charcoal, denim, dijon, flint,
  mullberry, mustard, ocean, orange, penny, red, roselight, rosewood, squash
} from '../../../config/images.js'
import {mapState, mapActions} from 'vuex'
import {mullbery} from "../../../config/images";
import {api} from "../../../config";
import axios from 'axios'
const token = localStorage.getItem('token')
import swal from 'sweetalert'
export default {
  data(){
    return{
      color_pick: null,
      name: null,
      ularTangga,
      pilihan3,
      selectOptions: [
        {label: 'Single Size', value: 'Single Size (150cm x 230 cm)'},
        {label: 'King Size', value: 'King Size (230cm x 230cm)'},
      ],
      size: null,
      colors: [
        mullberry, mustard, orange, penny, red, roselight, rosewood, squash
      ],
      option: '',
      radioCheck: false
    }
  },
  computed: {
    ...mapState([
      'productDetail'
    ])
  },
  methods: {
    ...mapActions([
      'fetchingProductDetail'
    ]),
    async addToCart () {
      if (!this.size || !this.color_pick || !this.name)  {
        return swal('Mohon pilih lengkapi field yang tersedia!!')
      }
      console.log(this.color_pick)
      try {
        let {data} = await axios.get(api+'items/size/color', {
          headers: {
            size : this.size,
            color: this.color_pick,
          }
        })
        console.log(data.item)
        let addToCart = await axios.post(api+'carts/add/'+data.item.id, {
          name: this.name
        }, {
          headers: {
            token
          }
        })
        console.log(addToCart.data)
        this.$store.commit('addCart', data)
        this.swalAddCart()
      }
      catch (e) {
        console.log(e)
      }
    },
    swalAddCart () {
      swal({
        title: "Berhasil menambahkan item ke Keranjang!!",
        text: 'Apakah ingin pergi ke Halaman Keranjang?',
        buttons: ["Tidak", "Ya"],
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$router.push('/account/keranjang')
          } else {
          }
        });
    },
    chooseColor(color) {
        let temp = color
        temp = temp.split('/')
        temp = temp[1]
        temp = temp.split('.')
        temp = temp[0]
        this.color_pick = temp
    },
    newVal(value) {
      this.radioCheck = true
      let color = require('../../../config/images.js')
      axios.get(api+'items/size/all', {
        headers: {
          size: value,
          item_name: this.productDetail.item_name
        }
      })
        .then(({data}) => {
          let temp = data.items
          let forChanging = []
          for(var i=0;i<temp.length;i++) {
            forChanging.push(color[temp[i].color])
          }
          this.colors = forChanging
          console.log(this.colors,'apa nih isinya')
          console.log(temp)
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  created () {
    const id = this.$route.params.id
    this.fetchingProductDetail(id)
  },
  filters: {
    parsedMoney (value) {
      return Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
    }
  }
	
}
</script>

<style scoped>
  .image-click {
    cursor: pointer;
  }
.section1{
	margin-top:120px;
	padding: 20px
} 
.inputText{
	width: 300px;
	height: 32px;
}
.btn-sold{
	width: 100px;
}
.show{
	position: absolute;
    bottom: 15px;
	right: 35px;
	padding: 10px
}
.container{
	position: relative;
    text-align: center;
    color: white;
}
.image{
	padding: 5px;
}
.cursor {
  /*cursor: pointer;*/
}
@media only screen and (max-width: 400px){
	.show{
		position: relative;
		right: 2px;
	}
}
</style>

