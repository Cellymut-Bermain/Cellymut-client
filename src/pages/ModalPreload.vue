<template>
  <q-modal @hide="modalClosed"  v-model="opened" maximized>
    <q-modal-layout style="background-color: #f6bdc8">
      <div class="row wrap items-stretch justify-center">
          <img class="padding-preload" style="position: absolute; top:30%; bottom: 50%;" :src="preloader" alt="">
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  import preloader from '../assets/assets/logo_preloader.png'
  import bintang1 from '../assets/assets/bintang1.png'
  import bintang2 from '../assets/assets/bintang2.png'
  import bintang3 from '../assets/assets/bintang3.png'
  import $ from 'jquery'
  export default {
    data () {
      return {
        preloader: bintang1,
        bintangs: [bintang1, bintang2, bintang3, bintang1, bintang2, bintang3]
      }
    },
    computed: {
      opened: {
        get () {
          return this.$store.state.opened
        },
        set (value) {
          this.$store.commit('setOpened', value)
        }
      },
      showText : {
        get() {
          return this.$store.state.showText
        },
        set (value) {
          this.$store.commit('setShowText', value)
        }
      },
      ended : {
        get() {
          return this.$store.state.ended
        },
        set (value) {
          this.$store.commit('setEnded', value)
        }
      },
      width: {
        get () {
          return this.$store.state.width
        }
      }
    },
    methods: {
      timeOutModal () {
        console.log('timeout modal jalan gak')
        let self = this
        let counter = 0
        if (this.$route.name==='home') {
          var interval = setInterval(function () {
            self.preloader = self.bintangs[counter]
            counter++
          },500)
          setTimeout(function(){
            self.opened = false
            self.$store.commit('setOpened', false)
            // self.videoEnded()
            self.modalClosed()
            clearInterval(interval)
          }, 3000);
        }
      },
      modalClosed () {
        if (this.$route.name==='home')  {
          let vid = document.getElementById("myVideo");
          vid.play();
        }
      },
      triggerEnded() {
        var aud = document.getElementById("myVideo");
        let self = this
        aud.onended = function() {
          // alert("The Video has ended");
          self.videoEnded()
        };
      },
      videoEnded () {
        let self = this
        var shrinkit = setInterval(function()
        {
          //you can access the width as a percentage pretty easily:
          // var width = parseInt($('.video-class')[0].style.width)-30;
          // console.log('========>>>>>.',width)
          // $(".video-class").width(width + '%');
          self.$store.commit('setEnded', true)
          console.log('berkurang')
          self.$store.commit('setShowText', true)
          self.$store.commit('setEnded', true)
        }, 100);
        setTimeout(function() {
          clearInterval(shrinkit)
          self.isImageAda()
        }, 100);
      },
      isImageAda () {
        let self = this
        setTimeout(function () {
          var width = parseInt($('#image-transition')[0].style.width)-30;
          console.log('========>>>>>.',width)
          $("#image-transition").width(width + '%');
        }, 10)
        setTimeout (function () {
          self.$store.commit('setWidthEnded', true)
        },2000)
      }
    },
    mounted () {
      if (this.$route.name!=='home') {
        console.log('bukan rumah')
        this.$store.commit('setOpened', false)
      }
      else if (this.$route.name=='home') {
        this.timeOutModal()
        this.triggerEnded()
        console.log('ini di else home')
      }
      this.$store.dispatch('checkingSize')
    }
  }
</script>

<style>
  @media only screen and (max-width: 992px) {
    .padding-preload {
      width: 70%;
    }
  }
</style>
