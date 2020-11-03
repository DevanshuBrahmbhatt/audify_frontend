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
                <h3>Github Operations</h3>
              </v-col>
            </v-row>

            <v-row>
              <v-col lg="12">
                <md-card>
                  <md-card-header data-background-color="green">
                    <h4 class="title">All Github Operations</h4>
                    <p class="category">
                      Here is all Git stats of your company
                    </p>
                  </md-card-header>
                  <md-card-content>
                    <md-table
                      v-model="users"
                      :table-header-color="tableHeaderColor"
                    >
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Operation Name">{{
                          item.firstName
                        }}</md-table-cell>
                        <md-table-cell md-label="Repository">{{
                          item.project
                        }}</md-table-cell>
                        <md-table-cell md-label="Owner Name">{{
                          item.mobileNo
                        }}</md-table-cell>
                        <md-table-cell md-label="Operator Name">
                          {{ item._id }}
                          >
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
import url from "../../../url";
export default {
  mounted() {
    axios
      .get(url.url + "/git/stats")
      .then((response) => {
        this.users = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      users: "",
    };
  },
};
</script>
