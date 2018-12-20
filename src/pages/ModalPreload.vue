<template>
  <q-modal @hide="modalClosed"  v-model="opened" maximized>
    <q-modal-layout style="background-color: #f6bdc8">
      <div class="row wrap items-stretch justify-center">
          <img style="position: absolute; top:30%; bottom: 50%;" :src="preloader" alt="">
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
        preloader,
        bintangs: [bintang1, bintang2, bintang3, bintang1, bintang2, bintang3, bintang1, bintang2, bintang3]
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
          },333)
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
          var width = parseInt($('.video-class')[0].style.width)-1;
          $(".video-class").width(width + '%');
          console.log('berkurang')
        }, 100);
        setTimeout(function() {
          clearInterval(shrinkit)
          self.$store.commit('setShowText', true)
          self.$store.commit('setEnded', true)
        }, 3000);
      },
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
