import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

import index from "@/views/index.vue";

import teams from "@/views/team/allTeams.vue";
import team from "@/views/team/team.vue";
import teamAdd from "@/views/team/addTeam.vue";

import employees from "@/views/employee/allEmployees.vue";
import employeeAdd from "@/views/employee/addEmployee.vue";
import employee from "@/views/employee/employee.vue";

const routes = [
  {
    path: "/",
    component: index,

  },
  {
    path: "/audify",
    component: DashboardLayout,
    redirect: "/audify/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
       {
        path: "/audify/team",
        name: "Teams",
        component: teams,
      },
      {
        path: "/audify/team/detail/:teamId",
        name: "Team Details",
        component: team,
      },
      {
        path: "/audify/team/add",
        name: "Add Team",
        component: teamAdd,
      },
      ,
      {
        path: "/audify/employee",
        name: "All Employees",
        component: employees,
      },
      {
        path: "/audify/employee/add",
        name: "Add Employee",
        component: employeeAdd,
      },
      {
        path: "/audify/employee/detail/:empId",
        name: "Employee Details",
        component: employee,
      },
    ],
  },

];

export default routes;
