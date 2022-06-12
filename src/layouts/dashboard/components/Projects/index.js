import { useState } from "react";


import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <SWBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SWBox>
          <SWTypography variant="h4" gutterBottom>
            Recent Whale Purchases
          </SWTypography>
          <SWBox display="flex" alignItems="center" lineHeight={0}>
            <SWTypography variant="button" fontWeight="regular" color="text">
              Whale traders are wallets who have transcated at least 200 SOL in the last 14 days.
            </SWTypography>
          </SWBox>
        </SWBox>
        <SWBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SWBox>
        {renderMenu}
      </SWBox>
      <SWBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </SWBox>
    </Card>
  );
}

export default Projects;
