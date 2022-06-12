import PropTypes from "prop-types";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

function Buyer({ data, id }) {
  return (
    <SWBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
    >
      <SWBox lineHeight={1.125}>
        <SWTypography display="block" variant="button" fontWeight="medium">
          {data}
        </SWTypography>
        <SWTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </SWTypography>
      </SWBox>
    </SWBox>
  );
}

Buyer.propTypes = {
  data: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Buyer;
