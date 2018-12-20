<!--<template>-->
  <!--<div style="width: 100%" class="margin-top-mobile">-->
      <!--<h2 class="font-weight-normal font-size-header-48 align-left align-mobile text-auth" style="margin-top: 0" >Profil</h2>-->
      <!--<q-breadcrumbs color="#707070" active-color="#707070" style="margin-top: -24px; font-size: 21px" class="profile-center text-auth">-->
        <!--<q-breadcrumbs-el label="Account" />-->
        <!--<q-breadcrumbs-el label="Profile" />-->
      <!--</q-breadcrumbs>-->

      <!--&lt;!&ndash;<div style="margin-top: 12px; width:100%" class="row wrap items-start profile-center">&ndash;&gt;-->
        <!--<div class="col-md-12 col-lg-2">-->
          <!--<div class="row wrap profile-center">-->
            <!--<img class="image-avatar align-left profile-center" :src="user.image_profile" alt="">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-12 col-lg-9 " >-->
          <!--<h1 style="font-size: 24.5px; margin: 0" class="font-weight-normal align-left align-mobile" > {{user.first_name}} {{user.last_name}}</h1>-->
          <!--<p style="font-size: 12.5px; padding-top: 12px;" class="align-left align-mobile" > {{user.email}} </p>-->
        <!--</div>-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->

  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import axios from 'axios'-->
  <!--const token = localStorage.getItem('token')-->
  <!--import {api} from "../../config";-->

  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--user: ''-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--fetchingUser () {-->
        <!--axios.get(api+'users/get-one', {-->
          <!--headers: {-->
            <!--token-->
          <!--}-->
        <!--})-->
          <!--.then(({data})=> {-->
            <!--console.log(data)-->
            <!--this.user = data.user-->
          <!--})-->
          <!--.catch(err=> {-->
            <!--console.log(err)-->
          <!--})-->
      <!--}-->
    <!--},-->
    <!--mounted () {-->
      <!--this.fetchingUser()-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.image-avatar {-->
    <!--border-radius: 80%;-->
    <!--width: 183px;-->
    <!--height: 183px;-->
    <!--vertical-align: middle;-->
  <!--}-->
  <!--.align-left {-->
    <!--text-align: left;-->
  <!--}-->
  <!--.margin-left {-->
    <!--margin-left: 24px;-->
  <!--}-->

  <!--@media only screen and (max-width: 992px) {-->
    <!--.profile-center {-->
      <!--justify-content: center !important;-->
    <!--}-->
    <!--.align-mobile {-->
      <!--text-align: center;-->
    <!--}-->
    <!--.margin-top-mobile {-->
    <!--}-->
  <!--}-->
<!--</style>-->
