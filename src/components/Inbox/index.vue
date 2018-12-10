<template>
    <article class="page">
        <p class="text-auth title">Acccount Settings</p>
        	<q-breadcrumbs>
            <q-breadcrumbs-el class="account text-account"  label="Account"/>
            <q-breadcrumbs-el label="Inbox"/>
          </q-breadcrumbs>

       <q-list>
  <q-collapsible group="somegroup"  multiline icon="star store" label="Cellymut">
    <div class="column items-center">
      <img :src="logo" alt="">
      <p class="text-auth kartu">Update Kartu Tantangan</p>
      <q-btn class="btn-download">download</q-btn>
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="star store"   label="Cellymut">
      <div class="column items-center">
      <img :src="logo" alt="">
      <p class="text-auth kartu">Update Kartu Tantangan</p>
      <q-btn class="btn-download">download</q-btn>
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="star store" label-lines="asdsad"  label="Cellymut">
      <div class="column items-center">
      <img :src="logo" alt="">
      <p class="text-auth kartu">Update Kartu Tantangan</p>
      <q-btn class="btn-download">download</q-btn>
    </div>
  </q-collapsible>
</q-list>

    </article>
</template>
<script>
import {logo} from '../../config/images.js'
export default {
    data(){
        return{
            logo
        }
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
.kartu{
    width: 349px;
    height: 37px;
    font-size: 32px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;

}
.btn-download{
     width: 174px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #a7b5d8;
}
</style>

