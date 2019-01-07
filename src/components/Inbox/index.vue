<template>
    <div class="page" style="margin-left: 24px">
        <!--<p class="text-auth title">Acccount Settings</p>-->
      <h2 class="font-weight-normal font-size-header-48 align-left text-auth align-keranjang-mobile-center" style="margin-top: 0" >Acccount Settings</h2>
        	<q-breadcrumbs>
            <q-breadcrumbs-el class="account text-account"  label="Account"/>
            <q-breadcrumbs-el label="Inbox"/>
          </q-breadcrumbs>

       <q-list>
  <q-collapsible @show="readStatus(index)"  v-for="(update, index) in updates" :key="index" group="somegroup"  multiline icon="inbox store" label="Message" :sublabel="status[update.status_read]">
    <q-card>
      <q-card-media>
        <div class="row wrap justify-center">
        <img class="align-center" style="width: 40%; height: 40%" :src="logo">
        </div>
      </q-card-media>
      <q-card-separator />
      <q-card-main>
        <div class="row wrap justify-center">
          <p class="text-auth font-size-paragraph-24" v-if="update.type===0"> Segera Melakukan pembayaran untuk order id : LX-{{update.TransactionId.slice(0,8).toUpperCase()}}</p>
          <p class="text-auth font-size-paragraph-24" v-if="update.type===1"> Pembayaran untuk Orderan anda dengan id: LX-{{update.TransactionId.slice(0,8).toUpperCase()}} berhasil di konfirmasi </p>
          <p class="text-auth font-size-paragraph-24" v-if="update.type===2"> Orderan anda dengan id: LX-{{update.TransactionId.slice(0,8).toUpperCase()}} Sedang dikirim  </p>
          <p class="text-auth font-size-paragraph-24" v-if="update.type===3"> Orderan anda dengan id: LX-{{update.TransactionId.slice(0,8).toUpperCase()}} Sudah sampao </p>
          <p class="text-auth font-size-paragraph-24" v-if="update.type===-1">Orderan anda dengan id: LX-{{update.TransactionId.slice(0,8).toUpperCase()}} Ditolak, mohon hubungin Admin via Whatsapp</p>
          <p class="text-auth font-size-paragraph-24" v-if="update.type===4">Update Kartu Tantangan</p>
        </div>
      </q-card-main>
      <q-card-actions align="center" v-if="update.type===4">
        <q-btn text-color="white" class="btn-download">Download</q-btn>
      </q-card-actions>
    </q-card>
  </q-collapsible>
</q-list>

    </div>
</template>
<script>
import logo from '../../assets/assets/logofix_.png'
import {mapState} from 'vuex'
import axios from 'axios'
import {api} from "../../config";

export default {
  data(){
    return{
      logo,
      status: ['unread', 'read']
    }
  },
  computed: {
    ...mapState([
      'updates', 'user',
    ])
  },
  methods: {
    fetchingUpdates () {
      let token = localStorage.getItem('token')
      console.log('>>>>>>>>>>>>>',this.user)
      axios.get(api+'updates/user/all', {
        headers: {
          token
        }
      })
        .then(({data})=> {
          console.log(data)
          this.$store.commit('setUpdate', data.updates)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    readStatus (index) {
      let item = this.updates
      item[index].status_read = 1
      console.log(item[index])
      this.$store.commit('setUpdate', item)
      axios.put(api+'updates/read/'+item[index].id)
        .then(({data})=> {
          console.log(data)
          this.$store.dispatch('fetchingUnreadUpdates')
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  mounted () {
    this.fetchingUpdates()
  }


}
</script>



<style scoped>
.title{
    height: 57px;
    font-size: 48px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
}
.account{
  height: 25px;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;

}
.page{
	width: 100%;
	height: 100%;
}
.btn-download{
     width: 174px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #a7b5d8;
}
</style>

