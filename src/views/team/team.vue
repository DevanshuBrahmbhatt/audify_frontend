<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Update Team</h4>
            <p class="category">Enter Team Updates here</p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Team Name</label>
                  <md-input v-model="name" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Team Id</label>
                  <md-input v-model="teamId" type="text" readonly></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Manager Name</label>
                  <md-input v-model="manager" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Project Name</label>
                  <md-input v-model="project" type="text"></md-input>
                </md-field>
              </div>

              <md-card-header
                :data-background-color="dataBackgroundColor"
                class="mt-5"
              >
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <v-row>
                    <div class="title">
                      Add Employee
                    </div>
                    <v-btn
                      @click="addNewEmployee"
                      style="cursor:pointer;"
                      class="subtitle-2 ml-10  md-primary float-right"
                      >Add Employee
                    </v-btn>
                  </v-row>
                </div>
              </md-card-header>

              <div class="md-layout-item md-small-size-100 md-size-100">
                <v-col v-for="(emp, i) in employees" :key="i">
                  <v-row>
                    <v-col lg="6" md="6" sm="6">
                      <div class="title font-weight-medium ">
                        {{ i + 1 }}. Employee
                      </div>
                    </v-col>

                    <v-col lg="6" md="6">
                      <v-btn
                        @click="deleteEmployee(i)"
                        style="cursor:pointer;"
                        class=" subtitle-2 float-right md-primary"
                        >Cancel</v-btn
                      >
                    </v-col>
                  </v-row>

                  <md-field>
                    <label>Add Employee Name</label>
                    <md-input v-model="emp.employee" type="text"></md-input>
                  </md-field>
                </v-col>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-button style="cursor:pointer;" v-on:click="submit"
                  >Upload Details</md-button
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
                <md-button class="red" v-on:click="deleteTeam"
                  >Delete Team</md-button
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
    const teamId = this.$route.params.teamId;
    axios
      .get("https://api.audify.live/team/view/" + teamId)
      .then((response) => {
        (this.manager = response.data.data[0].manager),
          (this.name = response.data.data[0].name),
          (this.employees = response.data.data[0].employee),
          (this.teamId = response.data.data[0].teamId),
          (this.project = response.data.data[0].project);
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
      manager: "",
      teamId: "",
      name: "",
      project: "",
      employees: [
        {
          employee: "",
        },
      ],
    };
  },
  methods: {
    submit: function() {
      axios
        .put("https://api.audify.live/team/update/" + this.teamId, {
          name: this.name,
          manager: this.manager,
          project: this.project,
          employee: this.employees,
        })
        .then((response) => {
          this.$router.push({ path: `/` });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteTeam: function() {
      axios
        .delete("https://api.audify.live/team/delete/" + this.teamId)
        .then((response) => {
          this.$router.push({ path: `/audify/team` });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addNewEmployee() {
      this.employees.push({
        employee: "",
      });
    },
    deleteEmployee(i) {
      this.employees.splice(i, 1);
    },
  },
};
</script>
<style></style>
