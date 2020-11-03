<template>
  <v-container>
    <md-card class="md-card-profile" style="background-color:white"
      ><br /><br /><br />
      <div class="md-card-avatar">
        <img class="img" :src="cardImage" style="margin-left:30px !important;" />
      </div>

      <md-card-content>
        <h3 class="card-title" style="color:black !important">Welcome To Audify</h3>
        <h4 class="card-description" style="color:black !important">
          Please, Login Via Company officals Email and Password for proceed
          further. You will be redirected according to your role.
        </h4>
        <!-- <md-button class="md-round md-success" to="/employeeLogin"
          >Login Employee</md-button
        > -->
          <form>
        <md-card style="background-color:white">

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Email ID</label>
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
                <md-button class="text-center" style="color:white !important; background:green !important"   v-on:click="submit"
                  >Login</md-button
                >
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
      </md-card-content>
    </md-card>
  </v-container>
</template>
<script>
import axios from "axios";
import url from "../url";
export default {
  name: "user-card",
  props: {
    cardImage: {
      type: String,
      default: require("@/assets/img/audify.png"),
    },
  },
 data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit: function() {
      axios
        .post(url.url + "/employee/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.data.flag == 0) {
            this.$router.push({ path: `/dashboard/employee/`+this.email });
            //Employee Route
          } else {
            this.$router.push({ path: `/team` });
            //CEO Route
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
