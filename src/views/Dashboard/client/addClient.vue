<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Add New Client</h4>
            <p class="category">Enter Your New Clients Details Here</p>
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
                  <label>Project</label>
                  <md-input v-model="project" type="text"></md-input>
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
import url from "../../../url";
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
      project: "",
      mobileNo: "",
      email:"",
      password:"",
    };
  },
  methods: {
    submit: function() {
      axios
        .post(url.url+"/client/create", {
          firstName: this.fname,
          lastName: this.lname,
          project: this.project,
          mobileNo: this.mobileNo,
          email:this.email,
          password:this.password
        })
        .then((response) => {

          this.$router.push({ path: `/client` });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
