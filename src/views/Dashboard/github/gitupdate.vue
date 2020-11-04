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
                      v-model="stats"
                      :table-header-color="tableHeaderColor"
                    >
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Repository">{{
                          item.repository
                        }}</md-table-cell>
                        <md-table-cell md-label="Owner Name">{{
                          item.owner
                        }}</md-table-cell>
                        <md-table-cell md-label="Commiter Name">{{
                          item.operator
                        }}</md-table-cell>
                        <md-table-cell md-label="Created_at">{{
                          item.created_at
                        }}</md-table-cell>
                        <md-table-cell md-label="Commit Message">
                          {{ item.error_message }}
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
      .get(url.url + "/getStat")
      .then((response) => {
        console.log(response);
        this.stats = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      stats: "",
    };
  },
};
</script>
