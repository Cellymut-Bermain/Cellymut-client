<template>
  <q-page>
      <div class="column wrap items-center" >
        <div v-if="width>991" class="row wrap form" style="width:100%">

          <div class="col-md-6 col-xs-12 col-sm-12 section1">
            <div class="column items-center">
              <p class="text-auth font-size-header-48">Sign In</p>
              <div>
                <label  class="forLabel" >Email Address:</label><br>
                <input v-model="email_sign_in" type="text" id="email">
              </div>
              <div>
                <label class="forLabel" >Password:</label><br>
                <input v-model="password_sign_in" type="text" >
              </div><br><br>
              <q-btn @click="sign_in" label="Sign In" class="btn-auth" /><br><br>

              <q-btn @click="fbSignIn" icon="fab fa-facebook-f" label="Sign In With Facebook" class="btn-fb" />
            </div>
          </div>

          <div class="col-md-6 col-xs-12 col-sm-12">
            <div class="column items-center">
              <p class="text-auth font-size-header-48">Sign Up</p>
              <div>
                <label  class="forLabel" >First Name:</label><br>
                <input v-model="first_name" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Last Name:</label><br>
                <input v-model="last_name" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Email Address:</label><br>
                <input v-model="email_sign_up" type="text" >
              </div>
              <div>
                <label  class="forLabel" >Phone Number:</label><br>
                <input v-model="phone_number" type="text" >
              </div>
              <div>
                <label class="forLabel" >Password:</label><br>
                <input v-model="password_sign_up" type="text" >
              </div><br><br>
              <div>
                <input type="checkbox"> <label class="text-auth"> I have read Terms and Conditions</label>
                <!-- <p class="text-auth">I have read Terms and Conditions</p> -->
              </div>

              <br>
              <q-btn @click="sign_up" label="Register" class="btn-auth" />
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
                  <label  class="forLabel" >Email Address:</label><br>
                  <input v-model="email_sign_in" type="text" >
                </div>
                <div>
                  <label class="forLabel" >Password:</label><br>
                  <input v-model="password_sign_in" type="text" >
                </div><br><br>
                <q-btn @click="sign_in" label="Sign In" class="btn-auth" /><br><br>
                <!--<p class="text-auth">Forgot Your Password</p>-->
                <!--<p class="text-auth">Or</p>-->

                <q-btn @click="fbSignIn" icon="fab fa-facebook-f" label="Sign In With Facebook" class="btn-fb" />
              </div>
            </div>
          </q-tab-pane>
          <q-tab-pane name="signup">
            <div class="col-md-6 col-xs-12 col-sm-12">
              <div class="column items-center">
                <div>
                  <label  class="forLabel" >First Name:</label><br>
                  <input v-model="first_name" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Last Name:</label><br>
                  <input v-model="last_name" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Email Address:</label><br>
                  <input v-model="email_sign_up" type="text" >
                </div>
                <div>
                  <label  class="forLabel" >Phone Number:</label><br>
                  <input v-model="phone_number" type="text" >
                </div>
                <div>
                  <label class="forLabel" >Password:</label><br>
                  <input v-model="password_sign_up" type="text">
                </div><br><br>
                <div>
                  <input type="checkbox"> <label class="text-auth"> I have read Terms and Conditions</label>
                   <!--<p class="text-auth">I have read Terms and Conditions</p>-->
                </div>

                <br>
                <q-btn @click="sign_up" label="Register" class="btn-auth" />
              </div>
            </div>
          </q-tab-pane>
        </q-tabs>
      </div>
  </q-page>
</template>
<script>
  import {logo} from '../config/images.js'
  import axios from 'axios'
  import {api, provider, fbLogin} from '../config'
  // import {api} from '../config'
  export default {
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
      }
    },
    methods: {
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
          localStorage.setItem('token', token)
          localStorage.setItem('first_name', first_name)
          this.$router.push('/')
          this.$store.commit('setLoginStatus', true)
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
        axios.post(api+'auth/login', {
          email: this.email_sign_in,
          password: this.password_sign_in
        })
          .then(({data})=> {
            console.log(data)
          })
          .catch(err=> {
            console.log(err)
          })
      },
      sign_up () {

      },
      checkingToken () {
        let token = localStorage.getItem('token')
        if (token) {
          this.$router.push('/')
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
  }

</style>

