import { forwardRef } from "react";
import PropTypes from "prop-types";
import SWAvatarRoot from "components/SWAvatar/SWAvatarRoot";

const SWAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <SWAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of MDAvatar
SWAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the MDAvatar
SWAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default SWAvatar;
