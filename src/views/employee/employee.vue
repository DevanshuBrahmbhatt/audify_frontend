<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Update Employee</h4>
            <p class="category">Enter Your Employee updates Here</p>
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
                  <label>Emp Id</label>
                  <md-input v-model="empId" type="text"></md-input>
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
                  >Delete Employee</md-button
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
export default {
  mounted() {
    const empId = this.$route.params.empId;
    axios
      .get("https://api.audify.live/employee/view/" + empId)
      .then((response) => {
        (this.fname = response.data.data[0].firstName),
          (this.lname = response.data.data[0].lastName),
          (this.role = response.data.data[0].role),
          (this.joinDate = response.data.data[0].joinDate),
          (this.mobileNo = response.data.data[0].mobileNo),
          (this.empId = response.data.data[0].empId);
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
      role: "",
      joinDate: "",
      mobileNo: "",
      empId: "",
    };
  },
  methods: {
    submit: function() {
      alert("click submit");
      axios
        .put("https://api.audify.live/employee/update/" + this.empId, {
          firstName: this.fname,
          lastName: this.lname,
          role: this.role,
          mobileNo: this.mobileNo,
          joinDate: this.joinDate,
        })
        .then((response) => {
          this.$router.push({ path: `/audify/employee` });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  deleteEmp: function() {
    alert("click delete");
    console.log("delete");
    axios
      .delete("https://api.audify.live/employee/delete/" + this.empId)
      .then((response) => {
        this.$router.push({ path: `/audify/employee` });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style></style>
