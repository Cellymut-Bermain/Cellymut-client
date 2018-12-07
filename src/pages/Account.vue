<template>
  <div style="width: 100%; margin-top: 120px;">
    <div class="tabordion">


      <AccountSectionProfile />



      <AccountSectionPesanan />


      <section id="section3">
        <input type="radio" name="sections" id="option3">
        <label for="option3">Akun Settings</label>
         <!-- <article> -->
          
          <AccountSettings/>
        <!-- </article> -->
      </section>


      <section id="section4">
        <input type="radio" name="sections" id="option4">
        <label for="option4">Pesanan Saya</label>
        <article>
          <h2>Ringo Starr</h2>
          <p>Richard Starkey, (born 7 July 1940), better known by his stage name Ringo Starr, is an English musician, singer, songwriter, and actor who gained worldwide fame as the drummer for The Beatles. On most of the band's albums, he sang lead vocals for one song, including "With a Little Help from My Friends", "Yellow Submarine" and their cover of "Act Naturally". He also wrote the Beatles' songs "Don't Pass Me By" and "Octopus's Garden", and is credited as a co-writer of others, such as "What Goes On" and "Flying".</p>
          <p>Starr was twice afflicted by life-threatening illnesses during his childhood, and as a result of prolonged hospitalisations, fell behind scholastically. In 1955, he entered the workforce and briefly held a position with British Rail before securing an apprenticeship at a Liverpool equipment manufacturer. Soon afterwards, he became interested in the UK skiffle craze, developing a fervent admiration for the genre. In 1957, he cofounded his first band, the Eddie Clayton Skiffle Group, which earned several prestigious local bookings before the fad succumbed to American rock and roll by early 1958.</p>
        </article>
      </section>

      <section id="section5">
        <input type="radio" name="sections" id="option5">
        <label for="option5">Change Password</label>
        <article>
          <h2>Ringo Starr</h2>
          <p>Richard Starkey, (born 7 July 1940), better known by his stage name Ringo Starr, is an English musician, singer, songwriter, and actor who gained worldwide fame as the drummer for The Beatles. On most of the band's albums, he sang lead vocals for one song, including "With a Little Help from My Friends", "Yellow Submarine" and their cover of "Act Naturally". He also wrote the Beatles' songs "Don't Pass Me By" and "Octopus's Garden", and is credited as a co-writer of others, such as "What Goes On" and "Flying".</p>
          <p>Starr was twice afflicted by life-threatening illnesses during his childhood, and as a result of prolonged hospitalisations, fell behind scholastically. In 1955, he entered the workforce and briefly held a position with British Rail before securing an apprenticeship at a Liverpool equipment manufacturer. Soon afterwards, he became interested in the UK skiffle craze, developing a fervent admiration for the genre. In 1957, he cofounded his first band, the Eddie Clayton Skiffle Group, which earned several prestigious local bookings before the fad succumbed to American rock and roll by early 1958.</p>
        </article>
      </section>

      <section id="section6">
        <input type="radio" name="sections" id="option6">
        <label for="option6">Inbox</label>
        <Inbox/>
      </section>

    </div>
  </div>
</template>

<script>

import AccountSettings from '../components/AccountSettings'
import Inbox from '../components/Inbox'

  import AccountSectionProfile from '../components/AccountSectionProfile'
  import AccountSectionPesanan from '../components/AccountSectionPesanan'

export default {
    components: {
      AccountSectionProfile,
      AccountSectionPesanan,
      AccountSettings,
      Inbox
    },
    data () {
      return {
        leftDrawerOpen: true
      }
    },
    methods : {
      openCity (e) {

      }
    }

  },


}
</script>

<style>
  .tabordion {
    color: #333;
    display: block;
    margin: 0px;
    position: relative;
    width: 80%;
  }

  .tabordion input[name="sections"] {
    left: -9999px;
    position: absolute;
    top: -9999px;
  }

  .tabordion section {
    display: block;
  }

  .tabordion section label {
    background: #ffffff;
    border:1px solid #fff;
    cursor: pointer;
    display: block;
    font-size: 1.2em;
    font-weight: bold;
    padding: 15px 20px;
    position: relative;
    width: 180px;
    z-index:100;
  }

  .tabordion section article {
    display: none;
    left: 230px;
    min-width: 300px;
    padding: 0 0 0 21px;
    position: absolute;
    top: 0;
  }
  article {
    width: 100%;
  }
  .tabordion section article:after {
    background-color: #ffffff;
    bottom: 0;
    content: "";
    display: block;
    left:-229px;
    position: absolute;
    top: 0;
    width: 220px;
    z-index:1;
  }

  .tabordion input[name="sections"]:checked + label {
    background: #eee;
    color: #bbb;
  }

  .tabordion input[name="sections"]:checked ~ article {
    display: block;
  }


  @media (max-width: 533px) {

    h1 {
      width: 100%;
    }

    .tabordion {
      width: 100%;
    }

    .tabordion section label {
      font-size: 1em;
      width: 160px;
    }

    .tabordion section article {
      left: 200px;
      min-width: 270px;
    }

    .tabordion section article:after {
      background-color: #ccc;
      bottom: 0;
      content: "";
      display: block;
      left:-199px;
      position: absolute;
      top: 0;
      width: 200px;

    }

  }


  @media (max-width: 768px) {
    h1 {
      width: 96%;
    }

    .tabordion {
      width: 96%;
    }
  }


  @media (min-width: 1366px) {
    h1 {
      width: 70%;
    }

    .tabordion {
      width: 70%;
    }
  }


</style>
