<template>
  <v-app>
    <v-container>
      <form>
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Add New Team</h4>
            <p class="category">Enter Your New Team Detalis Here</p>
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

          <md-card-header :data-background-color="dataBackgroundColor" class="mt-5">
              <div class="md-layout-item md-small-size-100 md-size-100">
                <v-row>
                  <div class="title">
                    Add Employee</div>
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

                <v-col v-for="(employee, i) in employees" :key="i">
                  <v-row>
                    <v-col lg="6" md="6" sm="6">
                      <div
                        class="title font-weight-medium "

                      >
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
                    <md-input v-model="employee.employee" type="text"></md-input>
                  </md-field>
                </v-col>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-button   style="cursor:pointer;"  v-on:click="submit"
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
import axios from 'axios';
import url from '../../url';
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
      manager: "",
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

      axios.post(url.url+'/team/create',{
          name:this.name,
          manager:this.manager,
          project:this.project,
          employee:this.employees
      }).then((response)=>{
          this.$router.push({ path: `/team` });
      }).catch((err)=>{
        console.log(err);
      })
  },


    addNewEmployee() {
      this.employees.push({
        employee: "",
      });
    },
    deleteEmployee(i){
      this.employees.splice(i,1);

    }
  },
};
</script>
<style></style>
