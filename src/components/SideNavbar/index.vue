<template>
  <div id="mySidenav" class="sidenav">
    <a href="#" class="closebtn" @click="closeNav" >&times;</a>
    <a href="#" @click="toPage('/')">Home</a>
    <a href="#" @click="toPage('/product')">Product</a>
    <a href="#" @click="toPage('/about')">Tentang Kami</a>
    <a href="#" @click="toPage('/askme')">Tanya Kami</a>
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

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
