<template>
  <v-app>
    <v-container>
      <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <v-row>
        <v-col
        lg="12"

        >
      <h3>Team Dashboard</h3>
      <v-btn class="success" :href=" '/audify/team/add' ">Add item</v-btn>
        </v-col>
      </v-row>

<v-row>
  <v-col
  lg="12"
  >
          <md-card>
                      <md-card-header data-background-color="green">
            <h4 class="title">All Teams </h4>
            <p class="category">Here is all teams of our company</p>
          </md-card-header>
                    <md-card-content>
<md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Team ID">{{ item.teamId }}</md-table-cell>
        <md-table-cell md-label="Team Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Manager Name">{{ item.manager }}</md-table-cell>
        <md-table-cell md-label="Deatils"><v-btn class="primary" :href=" '/audify/team/detail/' + item.teamId " > More details </v-btn></md-table-cell>
      </md-table-row>

    </md-table>
                    </md-card-content>
          </md-card>
</v-col>
</v-row>
      </div>
      </div>
    </div>

    </v-container>
  </v-app>
</template>


<script>
import  axios from 'axios';
export default {


mounted() {
 axios.get('https://api.audify.live/team/viewall')
.then((response)=>{
this.items=response.data.data;
 this.users=response.data.data;
})
.catch((error) =>{
  console.log(error);
})
},

 data() {
  return {
items:'',
users:''
  }
},

}
</script>