// prop-types is library for typechecking of props
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <SWBox p={2} mx={3} display="flex" justifyContent="center">
        <SWBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </SWBox>
      </SWBox>
      <SWBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <SWTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SWTypography>
        {description && (
          <SWTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </SWTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <SWTypography variant="h5" fontWeight="medium">
            {value}
          </SWTypography>
        )}
      </SWBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
