<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components : {
  }
}
</script>

<style>
  /*@media only screen and (max-width: 1440px) {*/
    html, body ,  p, h1, h2, h3, h4, h5 {
      font-family: "Roboto";
    }
    .logo-size {
      width: 60% !important;
      height: auto !important;
      /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);*/
    }
    .text-navbar {
      color: #6e819e;
    }
    .text-auth {
      color: #766a77
    }
    .text-section2 {
      color: #df8fc5;
    }
    .text-account {
      color : #707070;
    }
    .background-section2 {
      background-color: #fdf5fc;
    }
    .text-section3 {
      color: #6e819e;
    }
    .text-about-section-1 {
      color: #766a77;
    }
    .font-weight-normal {
      font-weight: 500 !important;
    }
    .font-weight-bold {
      font-weight: bold;
    }
    .font-size-header-48 {
      /*font-size: 48px !important;*/
      font-size: 28.8px !important;
    }
    .font-size-36 {
      font-size: 24.8px;
    }
    .font-size-subheader-28 {
      font-size: 19.8px !important;
      /*font-size: 28px !important;*/
    }
    .font-size-paragraph-24 {
      /*font-size: 24px;*/
      font-size: 16.32px;
    }
    .font-size-paragraph-21 {
      /*font-size: 21px;*/
      font-size: 14.28px;
    }
    .font-size-paragraph-18 {
      font-size: 10.8px !important;
      /*font-size: 18px !important;*/
    }
    .font-size-mobile-24 {
      font-size: 24px;
    }
    .font-size-mobile-16 {
      font-size: 16px;
    }
    .padding-right-28 {
      padding-right: 28px;
    }
    .align-center {
      text-align: center;
    }
    .align-right {
      text-align: right;
    }
    .align-left {
      text-align: left;
    }
    input[type=text] {
      width: 400px;
      padding: 12px 20px;
      margin-top: 10px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
}
    input[type=password] {
      width: 400px;
      padding: 12px 20px;
      margin-top: 10px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size:16px;
    }
  input[type=number] {
    width: 400px;
    padding: 12px 20px;
    margin-top: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-input-placeholder {
    font-size: 16px;
  }
  /*input::-webki {*/
    /*font-size: 16px;*/
  /*}*/
  /*}*/

</style>
