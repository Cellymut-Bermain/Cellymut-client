<template>
  <q-modal v-model="modalAddress" ref="modalRef">
    <q-modal-layout style="width: 100%">
      <q-toolbar slot="header">
        <q-toolbar-title>
          Alamat Pengiriman
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          v-close-overlay
          icon="clear"
        />
      </q-toolbar>

      <div style="width: 100%; padding-left: 48px;padding-right: 48px;padding-bottom: 24px">
        <div class="row wrap justify-center align-center">
          <div class="col-lg-12">
            <div class="col-lg-12">
              <q-field>
                <input v-model="address" class="input-class" type="text" placeholder="Address">
              </q-field>
            </div>
            <div class="col-lg-12">
              <q-field>
                <input v-model="type_home" class="input-class" type="text" placeholder="Apartment, Suites, etc">
              </q-field>
            </div>
            <div class="col-lg-12">
              <q-field>
                <input v-model="phone_number" class="input-class" type="text" placeholder="Phone Number">
              </q-field>
            </div>
            <div class="col-lg-12">
              <q-select
                float-label="City"
                filter
                class="input-class"
                v-model="city"
                :options="all_city"
                @input="valueChange"
              />
            </div>
            <div class="col-lg-12">
              <q-field>
                <input v-model="postal_code" class="input-class" type="text" placeholder="Postal Code">
              </q-field>
            </div>
            <!--<div class="col-lg-12 align-right">-->
              <q-card-actions align="end">
                <div class="row wrap items-center">
                <a class="alamat-now" @click="alamatProfile" > Gunakan Alamat Profile </a>
                </div>
                <q-btn  @click="addingAddress" style="border-radius: 20px; background-color: #a7b5d8;" text-color="white" no-caps>
                  Tambah Alamat
                </q-btn>
              </q-card-actions>

            <!--</div>-->
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  import swal from 'sweetalert'
  import axios from 'axios'
  import {api} from "../../config";
  import cities from '../../config/cities.json'
  console.log(cities)
  import { filter } from 'quasar'
  function parseCountries () {
    return cities.map(city => {
      return {
        label: city.city_name,
        value: city
      }
    })
  }
  export default {
    computed: {
      modalAddress : {
        get () {
          return this.$store.state.modalAddress
        },
        set(value) {
          this.$store.commit('setModalAddress', value)
        }
      },
      user: {
        get () {
          return this.$store.state.user
        }
      }
    },
    data () {
      return {
        address: '',
        type_home : '',
        city: '',
        city_name: '',
        postal_code: '',
        phone_number: '',
        all_city : parseCountries()
      }
    },
    methods: {
      addingAddress () {
        if (!this.address || !this.type_home || !this.city || !this.postal_code || !this.phone_number) {
          return swal('Mohon isi semua field!!')
        }
        let obj = {}
        obj.address = this.address
        obj.type_home = this.type_home
        obj.city = this.city.city_id
        obj.city_name = this.city.city_name
        obj.postal_code = this.postal_code
        obj.phone_number = this.phone_number
        console.log(obj)
        if (obj.address || obj.type_home || obj.city || obj.postal_code) {
          this.$store.commit('setAddress', obj)
          this.$store.commit('setModalAddress', false)
          this.$store.commit('setModalSummary', true)
        }
        else {
          // swal('Mohon isi semua kolom sebelum melanjutkan!')
          this.$store.commit('setAddress', obj)
          this.$store.commit('setModalAddress', false)
          this.$store.commit('setModalSummary', true)
        }
      },
      valueChange(value) {
        this.postal_code = value.postal_code
        console.log(value)
      },
      alamatProfile () {
        if (!this.user.address || !this.user.type_home || !this.user.provinsi || !this.user.phone_number || !this.user.country ) {
          return swal('Mohon maaf Data Profile anda belum lengkap!', 'Mohon untuk mengisi data profile anda di pengaturan akun.', 'warning')
        }
        console.log(this.address)
        this.address = this.user.address
        this.type_home = this.user.type_home
        this.postal_code = this.postal_code
        this.phone_number = this.user.phone_number
        // let address = {}
        // this.address.address = `${this.user.address} ${this.user.city} ${this.user.provinsi} ${this.user.country}`
        // this.address.phone_number = this.user.phone_number
      }
    },
    mounted () {
    }
  }
</script>


<style>
  .input-class {
    border-radius: 8px !important;
    background-color: #ffffff;
    width: 300px !important;

  }
  .alamat-now {
    color: cornflowerblue;
    cursor: pointer;
    margin-right: 8px;
  }
  .alamat-now:hover {
    color: darkslateblue;
  }
  @media only screen and(max-width: 480px) {
    .input-class {
      border-radius: 8px !important;
      background-color: #ffffff;
      width: 200px !important;
    }
  }
</style>
