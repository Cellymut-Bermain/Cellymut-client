<template>
    <div class="page margin-top-mobile">
          <!--<p class="text-auth title align-mobile">Acccount Settings</p>-->
          <h2 class="text-auth font-weight-normal font-size-header-48 align-left align-mobile" style="margin-top: 0" >Pengaturan Akun</h2>
					<q-breadcrumbs class="margin-top-breadcrumbs align-mobile-crumbs ">
            <q-breadcrumbs-el class="account text-account"  label="Akun"/>
            <q-breadcrumbs-el label="Pengaturan"/>
          </q-breadcrumbs>
          <div class="row wrap justify-start align-mobile-crumbs" style="margin-top: 24px">
            <div class="col-md-12 col-lg-3">

                <div class="col-lg-12 justify-mobile">
                    <img v-if="user" class="image-avatar align-left " :src="user.image_profile" alt="">
                </div>
                <div class="col-lg-12" style="margin-top: 24px">
                    <q-btn  flat color="primary">
                      <input type="file" style="width: 200px" @change="uploadImage">
                    </q-btn>
                  <!--<q-uploader-->
                    <!--hide-upload-button-->
                  <!--/>-->
                  <!--<input type="file" name="file" id="file" class="inputfile" />-->
                  <!--<input type="file" class="custom-file-input">-->
                  <!--<label >-->
                    <!--<input @change="uploadImage" type="file" id="file" aria-label="File browser example" >-->
                    <!--<span class="file-custom"> File</span>-->
                  <!--</label>-->
                </div>

            </div>
						<div class="col-md-12 col-lg-8 margin-left" >
							<p class="text-auth align-left">Email</p>
							<input  :readonly="!editStatus" v-model="email" type="text" class="inText" name="" ><br><br>
							<p class="text-auth align-left">Nomor Telepon</p>
							<input :readonly="!editStatus" v-model="phone_number" type="text" class="inText" name="" ><br><br>
							<p class="text-auth align-left">Shipping Addresss</p>
							<input :readonly="!editStatus" v-model="address" type="text" class="inText" name="" placeholder="Alamat Lengkap">
							<input :readonly="!editStatus" v-model="type_home" type="text" class="inText" name="" placeholder="Apartemen, Cluster, Rumah , dll">
							<input :readonly="!editStatus" v-model="city" type="text" class="inText" name="" placeholder="Kotamadya">
							<div class="row wrap justify-between">
                <div class="col-lg-4">
                  <input :readonly="!editStatus" v-model="province" type="text" class="inText" name="" placeholder="Provinsi">
                </div>
                <div class="col-lg-4">
                  <input :readonly="!editStatus" v-model="country" type="text" class="inText" name="" placeholder="Negara">
                </div>
                <div class="col-lg-3">
                  <input :readonly="!editStatus" v-model="postal_code" type="text" class="inText" name="" placeholder="Kode Pos">
                </div>
							</div>
              <div class="row wrap justify-end">
                <q-btn v-if="editStatus" color="red" @click="changeEditMode(false)" flat> Batal</q-btn>
                <q-btn v-if="editStatus" color="primary" @click="saveProfile" flat> Simpan Perubahan</q-btn>
                <q-btn v-if="!editStatus" @click="changeEditMode(true)" flat color="green"> Ubah Datadiri </q-btn>
              </div>

							<br><br><br>



              <!--<div class="row wrap items-starts justify-start">-->
              <h2 class="change-password text-auth">Ganti Password</h2>
                <div class="col-lg-12">
                <p class="text-auth align-left">Password Sekarang</p>
                </div>
                <div class="col-lg-12">
                  <div class="row wrap justify-start">
                    <input v-model="password" type="password" class="inPass align-left" name="" id="input-current" >
                  </div>
                </div>
                <q-checkbox
                  v-model="checked"
                  checked-icon="visibility"
                  unchecked-icon="visibility_off"
                  label="show/hide password"
                  @input="changeCurrent"
                  style="font-size: 16px"
                />
              <br><br>

                <!--<div class="row wrap items-start justify-start">-->
                  <div class="col-lg-12">
                    <p class="text-auth align-left">Password Baru</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="row wrap justify-start">
                      <input v-model="new_password" type="password" class="inPass" name="" id="input-new" ><br><br>
                    </div>
                  </div>
                <q-checkbox
                  v-model="checkedNew"
                  checked-icon="visibility"
                  unchecked-icon="visibility_off"
                  label="show/hide password"
                  @input="changeNew"
                  style="font-size: 16px"
                />
              <br><br>
                  <div class="row wrap justify-start">
                    <q-btn @click="cancelPassword" flat color="red">Batal</q-btn>
                    <q-btn @click="changePassword" flat color="primary">Simpan</q-btn>
                    <!--<q-btn @click="changePassword" class="btn-cancel" label="Cancel" style="margin-right:10px" />-->
                    <!--<q-btn text-color="white" @click="changePassword" class="btn-save text-auth" label="Save" />-->
                  </div>
              <br><br><br>
                <!--</div>-->
              <!--</div>-->


						</div>
					</div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {api, storage} from "../../config";
  const token = localStorage.getItem('token')
  import swal from 'sweetalert'
  export default {
	data(){
		return{
		  user: null,
      email: '',
      password: '',
      new_password: '',
      phone_number: '',
      address: '',
      type_home: '',
      city: '',
      country: '',
      province: '',
      postal_code: '',
      image: null,
      editStatus : false,
      checked: false,
      checkedNew: false,
		}
	},
  methods: {
    changeCurrent () {
      console.log(this.checked)
      var x = document.getElementById("input-current");
      if (this.checked)  {
        x.type = "text";
      }
      else {
        x.type = "password";
      }
    },
    changeNew () {
      console.log(this.checkedNew)
      var x = document.getElementById("input-new");
      if (this.checkedNew)  {
        x.type = "text";
      }
      else {
        x.type = "password";
      }
    },
	  changeEditMode (value) {
	    this.editStatus = value
    },
    saveProfile () {
      axios.put(api+'users/update/user', {
        email: this.email,
        phone_number: this.phone_number,
        address: this.address,
        type_home: this.type_home,
        city: this.city,
        country: this.country,
        provinsi: this.province,
        postal_code: this.postal_code,
      }, {
        headers: {
          token
        }
      })
        .then(({data})=> {
          console.log(data)
          this.editStatus = false
        })
        .catch(err=> {
          console.log(err)
        })
    },
    cancelPassword () {
      this.password= null
      this.new_password = null
    },
    changePassword () {
      axios.put(api+'users/update/user/password', {
        password: this.password,
        newPass: this.new_password
      }, {
        headers: {
          token
        }
      })
        .then(({data})=> {
          console.log(data)
          if (data.status) {
            console.log('password benar, berhasil ganti password')
            swal('Berhasil ganti password!').then(()=> {
              this.password= null
              this.new_password = null
            })
          }
          else {
            console.log(data.msg)
            swal('Gagal mengubah password! Current Password anda salah!')
          }
        })
        .catch(err=> {
          console.log(err)
        })
    },
    uploadImage(e) {
      console.log(e.target.files[0])
      this.image = e.target.files[0]
      storage.ref('user_photos/'+this.image.name).put(this.image)
        .then(()=> {
          storage.ref('user_photos/'+this.image.name).getDownloadURL()
            .then((url)=> {
              console.log(url)
              this.user.image_profile = url
              this.changeImage(url)
            })
            .catch(err=> {
              console.log(err)
            })
        })
        .catch(err=> {
          console.log(err)
        })
    },
    changeImage (url) {
      axios.put(api+'users/update/change-image', {
        image_profile: url
      }, {
        headers: {
          token
        }
      })
        .then(({data})=> {
          console.log(data)
        })
        .catch(err=> {
          console.log(err)
        })
    },
    fetchingUser () {
      axios.get(api+'users/get-one', {
        headers: {
          token
        }
      })
        .then(({data})=> {
          console.log(data)
          let temp = data.user
          this.user = temp
          this.email = temp.email
          this.phone_number = temp.phone_number
          this.address = temp.address
          this.type_home = temp.type_home
          this.city = temp.city
          this.country = temp.country
          this.province = temp.provinsi
          this.postal_code = temp.postal_code
        })
        .catch(err=> {
          console.log(err)
        })
    }
  },
  mounted () {
    this.fetchingUser()
  }

}
</script>

<style scoped>
  .image-avatar {
    border-radius: 80%;
    border: solid 2px #766a77;
    width: 183px;
    height: 183px;
    vertical-align: middle;
  }
.title{

	/* width: 381px; */
  height: 57px;
  font-size: 48px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
}
.box{
  width: 311px;
	height: 311px;
  border: 1px solid;
  padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.account{
  height: 25px;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;

}
.btn-select{
	/* color: black; */
	border: 1px solid #ccc;;
	width: 96%;
	border-radius: 8px;
	height: 100%;
	padding: 10px
}
.inText{
	width: 100%;
  font-size: 16px;
}
.inPass{
	width: 100%;
  font-size: 16px;
}
.page{
	width: 100%;
	height: 100%;
}
.btn-save{
	width: 121px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #a7b5d8;
}
.btn-cancel{
	width: 121px;
  height: 46px;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #f2f2f2;
}
  .margin-left {
    margin-left: 4rem;
  }
  .change-password {
    font-size: 24px;
  }


  @media only screen and (max-width: 992px) {
    .margin-left {
      margin-left: 0 !important;
    }
    .inPass{
      width: 100%;
    }
    .margin-top-breadcrumbs {
      margin-top: 4rem;
    }
    .align-mobile {
      text-align: center !important;
    }
    .align-mobile-crumbs {
      justify-content: center;
    }

  }
  @media only screen and (max-width: 420px) {
    .justify-mobile {
      justify-content: center !important;
      margin-left: 20px !important;
    }
  }

</style>

