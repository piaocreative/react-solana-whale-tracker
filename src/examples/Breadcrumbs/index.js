import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
// import Icon from "@mui/material/Icon";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

function Breadcrumbs({ title, light }) {
  // const routes = route.slice(0, -1);

  return (
    <SWBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
          },
        }}
      />
      <SWTypography fontWeight="bold" variant="h6" color={light ? "white" : "dark"} noWrap>
        {title.replace("-", " ")}
      </SWTypography>
    </SWBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  // icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  // route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
};

export default Breadcrumbs;
