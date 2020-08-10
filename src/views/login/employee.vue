<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Welcome Employee</h4>
            <p class="category">Enter Your Detalis Here</p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Email ID</label>
                  <md-input v-model="email" type="email"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Password</label>
                  <md-input v-model="password" type="password"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-button class="md-primary" v-on:click="submit"
                  >Login</md-button
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
