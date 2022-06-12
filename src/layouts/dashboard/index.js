import Grid from "@mui/material/Grid";

import SWBox from "components/SWBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import Projects from "layouts/dashboard/components/Projects";
import Invoices from "layouts/billing/components/Invoices";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SWBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <SWBox mb={1.5}>
              <DefaultInfoCard icon="person_add" title="OG FLOWERS" value="542.69 SOL" />
            </SWBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SWBox mb={1.5}>
              <DefaultInfoCard icon="person_add" title="Taiyo Robotics" value="497.00 SOL" />
            </SWBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SWBox mb={1.5}>
              <DefaultInfoCard icon="person_add" title="TYR-Incubator" value="174.00 SOL" />
            </SWBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SWBox mb={1.5}>
              <DefaultInfoCard icon="person_add" title="Yaku Engineering" value="99.34 SOL" />
            </SWBox>
          </Grid>
        </Grid>
        <SWBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SWBox>
      </SWBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
