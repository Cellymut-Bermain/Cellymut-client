<template>
  <div id="mySidenav" class="sidenav">
    <a href="#" class="closebtn" @click="closeNav" >&times;</a>
    <q-collapsible style="padding: 0 !important;" label="First">
      <template slot="header">
        <a  style="margin-left: -16px" class="align-left" href="#" >Akun Saya</a>
        <q-item-main />
        <q-item-side right>
          <q-icon />
        </q-item-side>
      </template>
      <a class="align-left border-top" href="#" @click="toPage('/account/setting')">Pengaturan Akun</a>
      <a class="align-left border-top" href="#" @click="toPage('/account/keranjang')">Keranjang Belanja</a>
      <a class="align-left border-top border-bottom" href="#" @click="toPage('/account/order')">Pesanan Saya</a>
      <!--<a class="align-left border-top border-bottom" href="#" @click="toPage('/account/inbox')">Updates</a>-->
    </q-collapsible>
    <a class="align-left" href="#" @click="toPage('/')">Home</a>
    <a class="align-left" href="#" @click="toPage('/product')">Tutorial</a>
    <a class="align-left" href="#" @click="toPage('/about')">Tentang Kami</a>
    <a class="align-left" href="#" @click="toPage('/askme')">Tanya Kami</a>
  </div>
</template>

<script>
  export default {
    methods: {
      closeNav () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("toolbar-nav").style.display = "flex"

      },
      toPage (loc) {
        this.$router.push(loc)
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("toolbar-nav").style.display = "flex"
      }
    }
  }
</script>


<style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #9698f4;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align:center;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    transition: 0.3s;

  }

  .sidenav a:hover{
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  .border-top {
    border-top: 1px solid white;
    width: 100%;
  }
  .border-bottom {
    border-bottom: 1px solid white;
    width: 100%;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
