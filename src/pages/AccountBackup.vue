<template>
  <div class="grid-container" style="margin-top: 120px;">
    <div class="item2" >
      <h1 class="font-size-subheader-28 font-weight-normal" >Akun Saya</h1>
      <div>
        <div class="col-lg-12" v-for="(button, index) in buttons" :key="index">
          <q-btn :to="button.url" class="full-width" flat>
            {{button.name}}
          </q-btn>
        </div>
      </div>
    </div>
    <div class="item3">
      <router-view/>
    </div>
    <div class="item5">Footer</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        buttons : [
          {
            url: '/account/profile',
            name: 'Profil'
          },
          {
            url: '/account/keranjang',
            name: 'Keranjang Belanja'
          },
          {
            url: '/account/setting',
            name: 'Akun Setting'
          },
          {
            url: '/account/order',
            name: 'Pesanan Saya'
          },
          {
            url: '/account/password',
            name: 'Change Password'
          },
          {
            url: '/account/inbox',
            name: 'Inbox'
          }
        ]
        // buttons: ['Profil', 'Keranjang Belanja', 'Akun Setting', 'Pesanan Saya', 'Change Password', 'Inbox']
      }
    }
  }
</script>
<style>
  .item2 { grid-area: menu; }
  .item3 { grid-area: main; }
  .item5 { grid-area: footer; }

  .grid-container {
    display: grid;
    grid-template-areas:
      'menu main main main main main'
      'footer footer footer footer footer footer';
    grid-gap: 10px;
    padding: 10px;
  }

  .grid-container > div {
    background-color: white;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
</style>
