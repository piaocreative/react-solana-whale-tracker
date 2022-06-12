import { forwardRef } from "react";

import PropTypes from "prop-types";

// Custom styles for SWInput
import SWInputRoot from "components/SWInput/SWInputRoot";

const SWInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <SWInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of SWInput
SWInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the SWInput
SWInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SWInput;
