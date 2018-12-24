<template>
  <q-page>
      <div class="column wrap items-center" >
        <div v-if="width>991" class="row wrap form" style="width:100%">

          <div class="col-md-6 col-xs-12 col-sm-12 section1">
            <div class="column items-center">
              <p class="text-auth font-size-header-48">Masuk</p>
              <div>
                <label  class="forLabel" >Alamat Email:</label><br>
                <input @keyup.enter="sign_in" v-model="email_sign_in" type="text" id="email">
              </div>
              <div>
                <label class="forLabel" >Password:</label><br>
                <input @keyup.enter="sign_in"  v-model="password_sign_in" type="password" class="password" id="input-login"  >
              </div>
              <q-checkbox
                v-model="checkedLogin"
                checked-icon="visibility"
                unchecked-icon="visibility_off"
                label="show/hide password"
                @input="changeLogin"
              /><br><br>
              <q-btn @click="sign_in" label="Masuk" class="btn-auth" /><br><br>

              <q-btn @click="fbSignIn" icon="fab fa-facebook-f" label="Masuk Dengan Facebook" class="btn-fb" />
            </div>
          </div>

          <div class="col-md-6 col-xs-12 col-sm-12">
            <div class="column items-center">
              <p class="text-auth font-size-header-48">Sign Up</p>
              <div>
                <label  class="forLabel" >Nama Depan:</label><br>
                <input v-model="first_name" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Nama Belakang:</label><br>
                <input v-model="last_name" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Alamat Email:</label><br>
                <input v-model="email_sign_up" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Nomor Telepon:</label><br>
                <input id="phone_number" v-model="phone_number" type="number" >
                <!--<q-tooltip >Nomer handphone harus lebih dari 10 dan kurang dari 13</q-tooltip>-->
              </div>
              <div>
                <label class="forLabel" >Password:</label><br>
                <input v-model="password_sign_up" type="password" class="password" id="input-register" >
              </div>
              <q-checkbox
                v-model="checkedRegister"
                checked-icon="visibility"
                unchecked-icon="visibility_off"
                label="show/hide password"
                @input="changeRegister"
              /><br><br>
              <div>
                <input @input="checkTerms" id="check_id" value="ok" type="checkbox"> <label class="text-auth"> Saya telah membaca Syarat dan Ketentuan</label>
                <!-- <p class="text-auth">I have read Terms and Conditions</p> -->
              </div>

              <br>
              <q-btn @click="sign_up" label="Bergabung" class="btn-auth" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="width<=991" style="width: 100%; margin-top: 24px">
        <q-tabs  animated swipeable text-color="black" color="transparent" align="justify">
          <q-tab default name="signin" slot="title" label="Sign In" />
          <q-tab name="signup" slot="title"  label="Sign Up" />

          <q-tab-pane name="signin">
            <div class="col-md-6 col-xs-12 col-sm-12 section1">
              <div class="column items-center">
                <div>
                  <label  class="forLabel" >Alamat Email:</label><br>
                  <input v-model="email_sign_in" type="text" >
                </div>
                <div>
                  <label class="forLabel" >Password:</label><br>
                  <input v-model="password_sign_in" type="password" class="password" >
                </div><br><br>
                <q-btn @click="sign_in" label="Masuk" class="btn-auth" /><br><br>
                <!--<p class="text-auth">Forgot Your Password</p>-->
                <!--<p class="text-auth">Or</p>-->

                <q-btn @click="fbSignIn" icon="fab fa-facebook-f" label="Masuk Dengan Facebook" class="btn-fb" />
              </div>
            </div>
          </q-tab-pane>
          <q-tab-pane name="signup">
            <div class="col-md-6 col-xs-12 col-sm-12">
              <div class="column items-center">
                <div>
                  <label  class="forLabel" >Nama Depan:</label><br>
                  <input v-model="first_name" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Nama Belakang:</label><br>
                  <input v-model="last_name" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Alamat Email:</label><br>
                  <input v-model="email_sign_up" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Nomor Telepon:</label><br>
                  <input v-model="phone_number" type="text" >
                </div>
                <div>
                  <label class="forLabel" >Password:</label><br>
                  <input v-model="password_sign_up" type="password" class="password">
                </div><br><br>
                <div>
                  <input type="checkbox"> <label class="text-auth"> Saya telah membaca Syarat dan Ketentuan</label>
                   <!--<p class="text-auth">I have read Terms and Conditions</p>-->
                </div>

                <br>
                <q-btn @click="sign_up" label="Bergabung" class="btn-auth" />
              </div>
            </div>
          </q-tab-pane>
        </q-tabs>
      </div>
    <Footer />
  </q-page>
</template>
<script>
  import {logo} from '../config/images.js'
  import axios from 'axios'
  import {api, provider, fbLogin, auth} from '../config'
  import swal from 'sweetalert'
  import $ from 'jquery'
  import Footer from '../components/Footer/index.vue'
  // import {api} from '../config'
  export default {
    components: {
      Footer
    },
    data (){
      return{
        logo,
        tab: 'signin',
        width: 2000,
        height: 2000,
        email_sign_up: '',
        email_sign_in: '' ,
        password_sign_up: '',
        password_sign_in: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        terms : null,
        error: false,
        checkedLogin: false,
        checkedRegister: false
      }
    },
    methods: {
      changeLogin () {
        var x = document.getElementById("input-login");
        if (this.checkedLogin)  {
          x.type = "text";
        }
        else {
          x.type = "password";
        }
      },
      changeRegister () {
        var x = document.getElementById("input-register");
        if (this.checkedRegister)  {
          x.type = "text";
        }
        else {
          x.type = "password";
        }
      },
      async fbSignIn () {
        let loginFb = await fbLogin.signInWithPopup(provider)
        let {additionalUserInfo} = loginFb
        let {profile} = additionalUserInfo
        let {first_name} = profile
        let {last_name} = profile
        let {email} = profile
        let {user} = loginFb
        let {uid} = user
        let SignIn = await axios.post(api+'auth/login/facebook', {
          first_name, last_name, email, password: uid
        })
        let {data} = SignIn
        let {token} = data
        if (token) {
          // localStorage.setItem('token', token)
          // localStorage.setItem('first_name', first_name)
          // this.$router.push('/')
          // this.$store.commit('setLoginStatus', true)
          console.log('ini data', data)
          let user = JSON.stringify(data.user)
          localStorage.setItem('first_name',user)
          localStorage.setItem('token', data.token)
          this.$store.commit('setToken', data.token)
          this.$store.commit('setUser', data.user)
          this.$store.dispatch('fetchingCart')
          this.$router.push('/')
          this.$store.commit('setLoginStatus', true)
          this.$store.commit('setPage', 'home')
        }
        else {
          swal('Username/Password Salah')
        }

      },
      checkingSize () {
        window.addEventListener('resize', (e) => {
          this.width = e.target.innerWidth
          this.height = e.target.innerHeight
        })
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.width = x
        this.height = y
      },
      sign_in () {
        auth.signInWithEmailAndPassword(this.email_sign_in, this.password_sign_in).then(({user})=> {
          console.log(user)
          if (user.emailVerified) {
            this.loginBackEnd()
          }
          else {
            swal('Anda belum memverifikasi akun!!')
          }
        }).catch(function(error) {
          console.log(error)
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          swal('Akun Tidak Ada', 'Alamat Email / Password Salah', "error");
          // ...
        });
      },

      loginBackEnd () {
        axios.post(api+'auth/login', {
          email: this.email_sign_in,
          password: this.password_sign_in
        })
          .then(({data})=> {
            console.log(data)
            if (data.status) {
              let user = JSON.stringify(data.user)
              localStorage.setItem('first_name',user)
              localStorage.setItem('token', data.token)
              this.$store.commit('setToken', data.token)
              this.$store.commit('setUser', data.user)
              this.$store.dispatch('fetchingCart')
              this.$router.push('/')
              this.$store.commit('setLoginStatus', true)
              this.$store.commit('setPage', 'home')
            }
            else {
              swal(data.msg)
            }
          })
          .catch(err=> {
            console.log(err)
          })
      },
      sign_up () {
        //account/setting
        if (!this.first_name || !this.last_name || !this.password_sign_up || !this.password_sign_up || !this.password_sign_up) {
          return swal('Semua field harus diisi!!')
        }
        if (!this.terms) {
          return swal('Mohon baca Terms and Conditions!!')
        }
        if (String(this.phone_number).length<7) {
          return swal('Nomor Handphone Salah')
        }
        if (String(this.phone_number).length>13) {
          return swal('Nomor Handphone Salah')
        }
        if (this.checkingNumber(this.phone_number)==false) {
          return swal('Nomor handphone harus dimulai dari 0')
        }

        auth.createUserWithEmailAndPassword(this.email_sign_up, this.password_sign_up)
          .then((snap)=> {
            console.log(snap)
            this.sendVerif()
            this.registerBackEnd()
          })
          .catch(err=> {
            if (err.code=='auth/invalid-email' ) {
              swal('Format email tidak benar')
            }
            else {
              swal('Email telah digunakan')
            }


            console.log(err)
          })

      },
      registerBackEnd () {
        let numTemp = String(this.phone_number)
        let temp = numTemp.slice(1, numTemp.length)
        temp = '+62'+temp
        axios.post(api+'auth/register', {
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password_sign_up,
          email: this.email_sign_up,
          phone_number: temp
        })
          .then(({data})=> {
            if (data.status) {
              swal('Berhasil membuat akun baru!', 'Mohon Periksa Email Untuk Verifikasi Akun!!', 'success').then(()=> {
                this.first_name = null
                this.last_name = null
                this.password_sign_up = null
                this.email_sign_up = null
                this.phone_number = null
              })
              // localStorage.setItem('token', data.token)
              // localStorage.setItem('first_name', data.user.first_name)
              // this.$router.push('/')
              // this.$store.commit('setLoginStatus', true)
            }
            else {
              swal('Email telah digunakan!')
            }
          })
          .catch(err=> {
            console.log(err)
            swal('error happen!')
          })
      },
      checkingNumber (number) {
        let strNum = String(number)

        if (strNum[0] != '0') {

          return false
        }
        return true
      },
      sendVerif () {
        auth.onAuthStateChanged(function(user) {
          if (user) {
            console.log(user)
            if (user.emailVerified) {
              console.log('Email is verified');
            }
            else {
              console.log('Email is not verified');
              user.sendEmailVerification();
            }
          } else {
          }
        })
      },
      checkingToken () {
        let token = this.$store.state.token
        if (token) {
          this.$router.push('/')
        }
      },
      checkTerms() {
        if ($('#check_id').is(":checked"))
        {
          // it is checked
          this.terms = $('#check_id').val();
          console.log('chekced')
        }
        else {
          this.terms = null
        }
      }
    },
    watch: {
      phone_number: function (value) {
        // if (value==0) {
        //   this.phone_number = null
        // }
        if (String(value).length>0 && String(value).length<10 )  {
          $('#phone_number').css('border', '1px red solid')
        }
        else {
          $('#phone_number').css('border', '1px solid #ccc')
        }
        if (!value)  {
          $('#phone_number').css('border', '1px solid #ccc')
        }
      }
    },
    mounted () {
      this.checkingSize()
      this.checkingToken()
    },
  }
</script>

<style scoped>

  .forLabel{
    width: 120px;
    height: 21px;
    font-family: 'HelveticaNeue',sans-serif;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 3.06;
    letter-spacing: normal;
    text-align: left;
    color: #707070;
  }
  .btn-auth{
    width: 174px;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #766a77;
    color: white
  }
  .btn-fb{
    width: 60%;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #496cb2;
    color: white
  }
  .section1{
    border-right: 1px dotted;
    color:  #766a77;
  }
  .form{
    margin-top:60px;
  }
  @media only screen and (max-width: 440px) {
    .btn-fb {
      width: 80%;
      height: 46px;
      border-radius: 20px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
      background-color: #496cb2;
      color: white
    }
    input[type=text] {
      width: 100%;
    }
    input[type=password] {
      width: 100%;
    }
  }
  #phone_number {
    
  }

</style>

