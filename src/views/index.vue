<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Welcome CEO</h4>
            <p class="category">Enter Your Detalis Here</p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>User Name</label>
                  <md-input v-model="username" type="text"></md-input>
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
      username: null,
      password: null,
    };
  },
  methods: {
    submit: function() {
      console.log(this.password + "" + this.username);

      if (this.username === "user" && this.password === "user") {
        this.$router.push({ path: `/audify` });
      } else {
        alert("Wrong Password");
        this.$router.push({ path: `/` });
      }
    },
  },
};
</script>
<style></style>
