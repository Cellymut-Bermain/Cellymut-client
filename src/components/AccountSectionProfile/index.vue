<template>
  <div style="width: 100%">
      <h2 class="font-weight-normal font-size-header-48 align-left" >Profil</h2>
      <q-breadcrumbs color="#707070" active-color="#707070" style="margin-top: -24px; font-size: 21px">
        <q-breadcrumbs-el label="Account" />
        <q-breadcrumbs-el label="Profile" />
      </q-breadcrumbs>
      <div style="margin-top: 12px; width:100%" class="row wrap justify-left items-start">
        <div class="col-lg-2">
          <div class="row wrap justify-left">
            <img class="image-avatar align-left" src="https://static.zerochan.net/Megumin.full.1978894.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-9" style="margin-left: 24px" >
          <h1 style="font-size: 24.5px; margin: 0" class="font-weight-normal align-left" > Jane Permana Ruslijan</h1>
          <p style="font-size: 12.5px; padding-top: 12px;" class="align-left" > janepermana@gmail.com </p>
        </div>
      </div>
  </div>
</template>

<style>
  .image-avatar {
    border-radius: 80%;
    width: 183px;
    height: 183px;
    vertical-align: middle;
  }
  .align-left {
    text-align: left;
  }
  .margin-left {
    margin-left: 24px;
  }
</style>
