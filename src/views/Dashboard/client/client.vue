
<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Update client</h4>
            <p class="category">Enter Your client updates Here</p>
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
                  <md-input v-model="mobileNo" type="text"></md-input>
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
                  >Update Details</md-button
                >
              </div>
            </div>
          </md-card-content>
          <md-card>
            <md-card-header class="red">
              <h4 class="title">Delete Team</h4>
              <p class="category">Danger Zone</p>
            </md-card-header>
            <md-card-content>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-button class="red" v-on:click="deleteEmp"
                  >Delete client</md-button
                >
              </div>
            </md-card-content>
          </md-card>
        </md-card>
      </form>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
import url from "../../../url";
export default {
  mounted() {
    const clientId = this.$route.params.clientId;
    axios
      .get(url.url + "/client/view/" + clientId)
      .then((response) => {
        (this.fname = response.data.data[0].firstName),
          (this.lname = response.data.data[0].lastName),
          (this.project = response.data.data[0].project),
          (this.email = response.data.data[0].email),
          (this.password = response.data.data[0].password),
          (this.mobileNo = response.data.data[0].mobileNo);
      })
      .catch((err) => {
        console.log(err);
      });
  },

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
      joinDate: "",
      mobileNo: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submit: function() {
      const clientId = this.$route.params.clientId;

      axios
        .put(url.url + "/client/update/" + clientId, {
          firstName: this.fname,
          lastName: this.lname,
          project: this.project,
          mobileNo: this.mobileNo,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$router.push({ path: "/client" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteEmp: function() {
      const clientId = this.$route.params.clientId;
      axios
        .delete(url.url + "/client/delete/" + clientId)
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
