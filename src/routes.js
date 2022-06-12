import Dashboard from "layouts/dashboard";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Smart Money",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Collection View",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
  },
  {
    type: "collapse",
    name: "Whales",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
  },
  {
    type: "collapse",
    name: "My Wallet",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
  },
];

export default routes;
