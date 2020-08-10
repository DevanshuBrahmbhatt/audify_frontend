<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Add New Employee</h4>
            <p class="category">Enter Your New Employee Details Here</p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>First Name</label>
                  <md-input v-model="fname" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Last Name</label>
                  <md-input v-model="lname" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Position</label>
                  <md-input v-model="role" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Join Date</label>
                  <md-input v-model="joinDate" type="date"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Mobile No</label>
                  <md-input v-model="mobileNo" type="number"></md-input>
                </md-field>
              </div>
               <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Email</label>
                  <md-input v-model="email" type="email"></md-input>
                </md-field>
              </div>
               <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Password</label>
                  <md-input v-model="password" type="password"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-button style="cursor:pointer;" v-on:click="submit"
                  >Upload Details</md-button
                >
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
import url from "../../url";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fname: "",
      lname: "",
      role: "",
      joinDate: "",
      mobileNo: "",
      email:"",
      password:"",
    };
  },
  methods: {
    submit: function() {
      axios
        .post(url.url+"/employee/create", {
          firstName: this.fname,
          lastName: this.lname,
          role: this.role,
          mobileNo: this.mobileNo,
          joinDate: this.joinDate,
          email:this.email,
          password:this.password
        })
        .then((response) => {

          this.$router.push({ path: `/employee` });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
