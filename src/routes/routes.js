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

import teams from "@/views/team/allTeams.vue";
import team from "@/views/team/team.vue";
import teamAdd from "@/views/team/addTeam.vue";

import employees from "@/views/employee/allEmployees.vue";
import employeeAdd from "@/views/employee/addEmployee.vue";
import employee from "@/views/employee/employee.vue";
import alltask from "@/views/task/alltask.vue";

import employeeLogin from "@/views/login/employee.vue";
const routes = [
  // {
  //   path: "/",
  //   component: index,
  // },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/welcome",

    children: [
      {
        path: "/welcome",
        name: "index",
        component: index,
      },

      {
        path: "/employeeLogin",
        name: "Employee Login",
        component: employeeLogin,
      },
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
      ,
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
];

export default routes;
