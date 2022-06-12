// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <SWBox key={label} display="flex" py={1} pr={2}>
      <SWTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </SWTypography>
      <SWTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </SWTypography>
    </SWBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <SWBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </SWBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <SWBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SWTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SWTypography>
        <SWTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SWTypography>
      </SWBox>
      <SWBox p={2}>
        <SWBox mb={2} lineHeight={1}>
          <SWTypography variant="button" color="text" fontWeight="light">
            {description}
          </SWTypography>
        </SWBox>
        <SWBox opacity={0.3}>
          <Divider />
        </SWBox>
        <SWBox>
          {renderItems}
          <SWBox display="flex" py={1} pr={2}>
            <SWTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </SWTypography>
            {renderSocial}
          </SWBox>
        </SWBox>
      </SWBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
