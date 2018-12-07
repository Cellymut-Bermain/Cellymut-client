<template>
    <article class="page">
          <p class="text-auth title">Acccount Settings</p>
					
					<q-breadcrumbs>
            <q-breadcrumbs-el class="account text-account"  label="Account"/>
            <q-breadcrumbs-el label="Settings"/>
          </q-breadcrumbs>
          <div class="row">
						<div class="col-4 row justify-start">
							<div class="box">
								<p class="upload text-account">Upload Your Photo</p>
							</div>
						</div>
						<div class="col-6">
							<p class="text-auth">Email</p>
							<input type="text" class="inText" name="" id=""><br><br>
							<p class="text-auth">Phone Number</p>
							<input type="text" class="inText" name="" id=""><br><br>
							<p class="text-auth">Shipping Addresss</p>
							<input type="text" class="inText" name="" id="" placeholder="Address">
							<input type="text" class="inText" name="" id="" placeholder="Apartment, suite ,etc">
							<input type="text" class="inText" name="" id="" placeholder="City">
							<div class="row">
								<div class="col-4">
									<q-select
									stack-label="Country"
									inverted-light
									color="white"
									v-model="select"
									:options="options"
									class="btn-select"
									/>
								</div>
								<div class="col-4">
									<q-select
									stack-label="Province"
									inverted-light
									color="white"
									v-model="select"
									:options="options"
									class="btn-select"
									/>
								</div>
								<div class="col-4">
									<q-select
									stack-label="Postal Code"
									inverted-light
									color="white"
									v-model="select"
									:options="options"
									class="btn-select"
									/>
								</div>
							</div>
							<br><br><br>
							<p class="text-auth">Current Password</p>
							<input type="text" class="inPass" name="" id=""><br><br>
							<p class="text-auth">New Password</p>
							<input type="text" class="inPass" name="" id=""><br><br>
							      <q-btn class="btn-cancel" label="Cancel" style="margin-right:10px" />
							      <q-btn class="btn-save text-auth" label="Save" />
						</div>			
					</div>
    </article>
</template>
<script>
export default {
	data(){
		return{
			      options: [
        {
          label: 'Indonesia',
          value: 'goog'
        },
        {
          label: 'Swiss',
          value: 'fb'
        },
        {
          label: 'New Zealand',
          value: 'twtr'
        },
        {
          label: 'Russia',
          value: 'appl'
        },
        {
          label: 'United Kingdom',
          value: 'ora'
        }
      ],

		}
	}
}
</script>

<style scoped>

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
}
.inPass{
	width: 40%;
}
.page{
	width: 100%;
	height: 1500px;
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

</style>

