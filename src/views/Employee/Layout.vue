<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <v-container>
        <div class="content">
          <div class="md-layout">
            <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
              <v-row>
                <v-col lg="12">
                  <h3>Your Task Dashboard</h3>
                  <v-btn @click="allowCalendar()">Allow Google Calender</v-btn>
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
                            <v-btn style="color:red" class="sucess" v-else>
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
          <fixed-plugin
            :color.sync="sidebarBackground"
            :image.sync="sidebarBackgroundImage"
          >
          </fixed-plugin>

          <dashboard-content> </dashboard-content>

          <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../url";
import TopNavbar from "../../pages/Layout/TopNavbar.vue";
import ContentFooter from "../../pages/Layout/ContentFooter.vue";
import DashboardContent from "../../pages/Layout/Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "../../pages/Layout/Extra/FixedPlugin.vue";

export default {
  mounted() {
    const email = this.$route.params.email;
    axios
      .get(url.url + "/task/view/" + email)
      .then((response) => {
        console.log(response);
        this.item = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    allowCalendar() {
      const email = this.$route.params.email;
      axios
        .post(url.url + "/employee/allowAccess/" + email)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      item: "",
    };
  },
};
</script>
