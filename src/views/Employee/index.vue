<template>
  <v-app>
    <v-container>
      <div class="content">
        <div class="md-layout">
          <div
            class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
          >
            <v-row>
              <v-col lg="12">
                <h3>Task Dashboard</h3>
                <!-- <v-btn class="success" :href="'/task/add'"
                  >Add New Task</v-btn
                > -->
              </v-col>
            </v-row>

            <v-row>
              <v-col lg="12">
                <md-card>
                  <md-card-header data-background-color="green">
                    <h4 class="title">All Assigned Task</h4>
                    <p class="category">Here All task with details</p>
                  </md-card-header>
                  <md-card-content>
                    <md-table
                      v-model="item"
                      :table-header-color="tableHeaderColor"
                    >
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Task Name">{{
                          item.name
                        }}</md-table-cell>
                        <md-table-cell md-label="Description">{{
                          item.description
                        }}</md-table-cell>
                        <md-table-cell md-label="Assignee">{{
                          item.assignee
                        }}</md-table-cell>
                        <md-table-cell md-label="Assign_to">{{
                          item.assign_to
                        }}</md-table-cell>
                        <md-table-cell md-label="Status"
                          ><v-btn class="red white--text" v-if="!item.status">
                            Unavailable
                          </v-btn>
                          <v-btn class="primary" v-else>
                            {{ item.status }}
                          </v-btn>
                        </md-table-cell>
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
import axios from "axios";
import url from "../../url";
export default {
  mounted() {
    const email= req.params
    axios
      .get(url.url + "/task/view/")
      .then((response) => {
        console.log(response);
        this.item = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      item: "",
    };
  },
};
</script>
