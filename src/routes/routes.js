import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

// import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
// import TableList from "@/pages/TableList.vue";
// import Typography from "@/pages/Typography.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Notifications from "@/pages/Notifications.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

import index from "@/views/index.vue";

import teams from "@/views/Dashboard/team/allTeams.vue";
import team from "@/views/Dashboard/team/team.vue";
import teamAdd from "@/views/Dashboard/team/addTeam.vue";

import clients from "@/views/Dashboard/client/allClients.vue";
import client from "@/views/Dashboard/client/client.vue";
import clientAdd from "@/views/Dashboard/client/addClient.vue";



import employees from "@/views/Dashboard/employee/allEmployees.vue";
import employeeAdd from "@/views/Dashboard/employee/addEmployee.vue";
import employee from "@/views/Dashboard/employee/employee.vue";
import alltask from "@/views/Dashboard/task/alltask.vue";

import employeeDash from "@/views/Employee/Layout.vue";
const routes = [

  {
    path: "/welcome",
    name: "index",
    component: index,
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/welcome",

    children: [

      {
        path: "/team",
        name: "Teams",
        component: teams,
      },
      {
        path: "/team/detail/:teamId",
        name: "Team Details",
        component: team,
      },
      {
        path: "/team/add",
        name: "Add Team",
        component: teamAdd,
      },
      {
        path: "/client",
        name: "Clients",
        component: clients,
      },
      {
        path: "/client/detail/:clientId",
        name: "Client Details",
        component: client,
      },
      {
        path: "/client/add",
        name: "Add Client",
        component: clientAdd,
      },
      {
        path: "/employee",
        name: "All Employees",
        component: employees,
      },
      {
        path: "/employee/add",
        name: "Add Employee",
        component: employeeAdd,
      },
      {
        path: "/employee/detail/:empId",
        name: "Employee Details",
        component: employee,
      },
      {
        path: "/task",
        name: "All Assigned Tasks",
        component: alltask,
      },
    ],
  },
  {
    path: "/dashboard/employee/:email",
    name: "Welcome For Employee Only ",
    component: employeeDash,
  },
];

export default routes;
