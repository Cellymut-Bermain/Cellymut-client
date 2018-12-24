<template>
  <q-modal style="width: 100%" v-model="modalSummary" ref="modalRef">
    <q-modal-layout style="width: 100%">
      <q-toolbar color="white" slot="header">
        <q-toolbar-title style="color: #766a77;">
          Summary
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          v-close-overlay
          icon="clear"
          color="brown"
        />
      </q-toolbar>
      <div class="width-modal" style="padding: 48px; padding-top: 12px">
        <div class="row wrap items-start justify-start rata-tengah">
          <div class="col-lg-6">
            <q-card class="card-radius" flat>
              <q-card-title class="color1 font-size-paragraph-18 align-center" >
                <p class="align-left">Alamat Pengiriman </p>
              </q-card-title>
              <q-card-main class="color2 font-weight-normal">
                <p> {{first_name | parsedName}} </p>
                <p>{{address.phone_number}}</p>
                <p>{{address.address}}</p>
                <p>{{address.city_name}} , {{address.postal_code}}</p>
              </q-card-main>
            </q-card>
          </div>


          <div class="col-lg-6" >
            <div class="row wrap justify-end">
              <q-card style="width: 70%" class="card-radius">
                <q-card-title class="color2 font-weight-normal" style="padding-bottom: 8px">
                  Ringkasan Belanja
                </q-card-title>
                <div class="row wrap justify-center">
                  <hr style="margin: 0px; width: 95%; text-align: center">
                </div>
                <q-card-main class="color2">
                  <div class="row wrap items-start justify-between">
                    <div class="col-lg-6">
                      <p >Total Harga ( {{cartDetail.quantity}} barang) </p>
                    </div>
                    <div class="col-lg-6 align-right">
                      <p>Rp.{{cartDetail.Item.item_price*cartDetail.quantity | parsedMoney}}</p>
                    </div>
                  </div>
                  <div class="row wrap items-start justify-between">
                    <div class="col-lg-6">
                      <p>Harga kurir </p>
                    </div>
                    <div class="col-lg-6 align-right">
                      <p>Rp.{{cost_courier | parsedMoney }}</p>
                    </div>
                  </div>
                </q-card-main>
                <div class="row wrap justify-center">
                  <hr style="margin: 0px; width: 95%; text-align: center">
                </div>
                <q-card-main class="color2">
                  <div class="row wrap justify-end">
                    <div class="col-lg-6">
                      <p class="align-right" style="font-size: 21px">
                        {{ (cartDetail.Item.item_price*cartDetail.quantity) + cost_courier | parsedMoney}}
                      </p>
                    </div>
                  </div>
                </q-card-main>
                <q-card-actions align="center">
                  <q-btn class="button-style-bayar" no-caps text-color="white" @click="bayarSekarang">
                    Bayar Sekarang
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>



          <div class="col-lg-7 mobile-card">
            <q-card class="card-radius">
            <div class="row wrap items-starts justify-start">
              <div class="col-lg-4">
                <img :src="img" style="width: 200px;padding-left: 1.5rem ; padding-top: 1.5rem ; height: auto;" alt="">
              </div>
              <div class="col-lg-8">
                <q-card flat class="card-radius">
                  <q-card-title class="color2"> {{cartDetail.Item.item_name}} </q-card-title>
                  <q-card-main>
                    <div class="row wrap items-start justify-between">
                      <div class="col-lg-6">
                        <p class="color2">Jumlah: {{cartDetail.quantity}} </p>
                      </div>
                      <div class="col-lg-6 align-right">
                        <p class="color2">Rp.{{cartDetail.Item.item_price*cartDetail.quantity | parsedMoney}}</p>
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-main>
                    <p>Pilihan Pengambilan Barang</p>
                    <q-radio @input="triggerRadio" class="color2" v-model="option" val="solo" label="Ambil Sendiri" />
                    <br>
                    <q-radio @input="triggerRadio" class="color2" v-model="option" val="courier" label="Kurir" />
                    <q-select
                      float-label="Pilih Kurir"
                      v-model="courier"
                      radio
                      :options="selectOptions"
                      :readonly="courierStatus"
                      @input="pickCourier"
                    />
                  </q-card-main>
                  <q-card-actions v-if="courier_type.length>0">
                    <!--<q-select-->
                      <!--float-label="Pilih Service"-->
                      <!--:readonly="courierStatus"-->
                      <!--v-model="service_choice"-->
                      <!--:options="courier_type"-->
                      <!--@input="setCost"-->
                    <!--/>-->
                    <div style="padding-top: 8px; padding-bottom: 8px" v-for="(kurir, index) in courier_type" :key="index">
                      <q-radio @input="setCost" v-model="service_choice" :val="kurir" :label="kurir.label" />
                    </div>
                  </q-card-actions>
                  <q-card-main>
                    <div class="row wrap items-start justify-end">
                      <div class="col-lg-12 align-right">
                        <p class="color2"> Harga Kurir Rp.{{cost_courier | parsedMoney}} </p>
                      </div>
                    </div>
                  </q-card-main>
                </q-card>
              </div>
            </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  import axios from 'axios'
  import {api} from "../../config";
  import {mapState} from 'vuex'
  import swal from 'sweetalert'
  let first_name = localStorage.getItem('first_name')
  let token = localStorage.getItem('token')
  export default {
    data () {
      return {
        img: 'https://firebasestorage.googleapis.com/v0/b/cellymut-staging.appspot.com/o/assets%2Fmonopoly-01.png?alt=media&token=42b0f44b-651d-4de9-ae6f-dcc270260a83',
        option: null,
        courier: null,
        selectOptions: [
          {
            label: 'JNE',
            value: 'jne'
          },
          {
            label: 'POS Indonesia',
            value: 'pos'
          },
          {
            label: 'TIKI',
            value: 'tiki'
          },
        ],
        courierStatus : true,
        courier_type: [],
        cost_courier: 0,
        merk_courier: null,
        first_name,
        service_status: null,
        service_choice: null
      }
    },
    computed: {
      ...mapState([
        'address', 'cartDetail'
      ]),
      modalSummary: {
        get () {
          return this.$store.state.modalSummary
        },
        set(value) {
          this.$store.commit('setModalSummary', value)
        }
      }
    },
    methods: {
      triggerRadio (value) {
        if (value==='solo') {
          this.courierStatus = true
          this.courier_type = []
          this.cost_courier = 0
        }
        else {
          this.courierStatus = false
        }
      },
      getCostCourier (value) {
        console.log('get cost courier')
        axios.post(api+'carts/get/ongkir', {
          destination: this.address.city,
          courier: value
        })
          .then(({data})=> {
            console.log('oke')
            console.log(data.data.rajaongkir.results[0].costs)
            this.parsedCourierType(data.data.rajaongkir.results[0].costs)
          })
          .catch(err=> {
            console.log(err)
          })
      },
      pickCourier (value) {
        console.log('pick value', value)
        this.merk_courier = value
        // console.log(this.address)
        this.getCostCourier(value)
      },
      parsedCourierType (vals) {
        console.log('ini vals', vals)
        let tmep = []
        for (var i=0; i<vals.length;i++) {
          let obj = {
            label: `${vals[i].service} + (${vals[i].cost[0].etd}): ${vals[i].cost[0].value}`,
            // value: vals[i].cost[0].value
            value: vals[i]
          }
          tmep.push(obj)
        }
        this.service_status = tmep
        this.courier_type = tmep
      },
      setCost (value) {
        this.cost_courier = value.value.cost[0].value
      },
      bayarSekarang() {
        if (!this.option) {
          swal('Mohon pilih tipe pengiriman!!')
        }
        else if (this.option=='solo') {
          this.addToTransactions()
        }

        else if (this.option=='courier') {
          if (!this.cost_courier)  {
            swal('Mohon lengkapi tipe pengiriman!!')
          }
          else {
            this.addToTransactions()
          }
        }
      },
      addToTransactions () {
        let temp = this.cartDetail
        let obj = {}
        if (this.courierStatus === true)  {
          obj = {
            UserId : temp.UserId,
            ItemId: temp.ItemId,
            quantity: temp.quantity,
            color: temp.Item.color,
            price: temp.Item.item_price,
            cost: this.cost_courier,
            type_courier: 'pickup store',
            alamat_pengiriman: `${this.address.address} ${this.address.city} ${this.address.postal_code} ${this.address.type_home}`,
            phone_number: this.address.phone_number
          }
        }
        else {
          obj = {
            UserId : temp.UserId,
            ItemId: temp.ItemId,
            quantity: temp.quantity,
            color: temp.Item.color,
            price: temp.Item.item_price,
            cost: this.cost_courier,
            type_courier: this.merk_courier +' '+ this.courier_type.service,
            alamat_pengiriman: `${this.address.address} ${this.address.city} ${this.address.postal_code} ${this.address.type_home}`,
            phone_number: this.address.phone_number
          }
        }
        axios.post(api+'transactions/buy/item/'+temp.ItemId, obj, {
          headers: {
            token
          }
        })
          .then(({data})=> {
            console.log(data)
            obj.TransactionId = data.id
            this.addingMessage(obj)
            this.$store.commit('setModalSummary', false)
            this.$store.commit('setModalPembayaran', true)
            this.deleteCartAfterBuy(temp)
          })
          .catch(err=> {
            console.log(err)
          })
      },
      addingMessage (obj) {
        axios.post(api+`updates/add/user/${obj.UserId}/item/${obj.ItemId}`, {
          type: 0,
          TransactionId: obj.TransactionId

        })
          .then(({data})=> {
            console.log(data.msg)
          })
          .catch(err=> {
            console.log(err)
          })
      },
      deleteCartAfterBuy(cart) {
        console.log(cart,'ini cart')
        axios.delete(api+`carts/delete/cart/${cart.ItemId}/${cart.UserId}`, {
          headers: {
            token
          }
        })
          .then(({data})=> {
            console.log(data)
          })
          .catch(err=> {
            console.log(err)
          })
      }
    },
    filters: {
      parsedMoney (value) {
        return Number(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
      },
      parsedName (value) {
        let temp = JSON.parse(value)
        return temp.first_name
      }
    }
  }
</script>

<style>
  .color1 {
    color: #707070;
  }
  .color2 {
    color: #766a77;
  }
  .color3 {
    color: #ec6e82;
  }
  .width-modal {
    width: 80vw;
  }
  .q-card-title {
    font-weight: 500 !important;
  }
  .q-card-main  {
    font-weight: 500 !important;
  }
  .button-style-bayar {
    width: 200px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #ec6e82;
    padding-left: 8px;
  }
  .card-radius {
    border-radius: 8px;
  }

  @media only screen and (max-width: 992px) {
    .mobile-card {
      margin-top: 24px;
    }
    .rata-tengah {
      /*justify-content: center;*/
      /*text-align: center;*/
    }
    .width-modal {
      width: 100vw;
    }
  }
</style>
