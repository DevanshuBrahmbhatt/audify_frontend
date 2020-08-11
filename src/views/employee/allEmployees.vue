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
                <h3>Employee Dashboard</h3>
                <v-btn class="success" :href="'/employee/add'"
                  >Add New Employee</v-btn
                >
              </v-col>
            </v-row>

            <v-row>
              <v-col lg="12">
                <md-card>
                  <md-card-header data-background-color="green">
                    <h4 class="title">All Employees</h4>
                    <p class="category">Here is all Employees of our company</p>
                  </md-card-header>
                  <md-card-content>
                    <md-table
                      v-model="users"
                      :table-header-color="tableHeaderColor"
                    >
                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Emp Name">{{
                          item.firstName
                        }}</md-table-cell>
                        <md-table-cell md-label="Position">{{
                          item.role
                        }}</md-table-cell>
                        <md-table-cell md-label="Mobile No">{{
                          item.mobileNo
                        }}</md-table-cell>
                        <md-table-cell md-label="Deatils"
                          ><v-btn
                            class="primary"
                            :href="'/employee/detail/' + item._id"
                          >
                            More details
                          </v-btn></md-table-cell
                        >
                        <md-table-cell md-label="Status"
                          ><v-btn class="red white--text" v-if="!item.status">
                            Unavailable
                          </v-btn>
                          <v-btn class="primary" v-else>
                            {{ item.status }}
                          </v-btn>

                          <v-btn v-model="notifications">
                            <button
                              type="button"
                              aria-hidden="true"
                              class="close"
                              @click="deleteNotifications(item.email)"
                            >
                              <i data-notify="icon" class="material-icons"
                                >add_alert</i
                              >
                            </button>
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
    axios
      .get(url.url + "/employee/viewall")
      .then((response) => {
        console.log(response);
        this.users = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(url.url + "/employee/getNotifications/" + this.users.email)
      .then((response1) => {
        console.log("response1" + response1);
        this.notificatios = response1.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      users: "",
      notificatios: "",
    };
  },
  methods: {
    deleteNotifications(id) {
      axios
        .delete(url.url + "/deleteNotifications/" + id)

        .then((response) => {
          console.log(response);
          this.$router.push({ path: `/employee` });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
