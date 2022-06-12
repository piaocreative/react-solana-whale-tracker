import PropTypes from "prop-types";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";

function Invoice({ no, date, id, price, noGutter }) {
  return (
    <SWBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <SWBox alignItems="center">
        <SWTypography variant="caption" fontWeight="bold" color="text">
          {no}
        </SWTypography>
      </SWBox>

      <SWBox lineHeight={1.125}>
        <SWTypography display="block" variant="button" fontWeight="medium">
          {date}
        </SWTypography>
        <SWTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </SWTypography>
      </SWBox>
      <SWBox display="flex" alignItems="center">
        <SWTypography variant="button" fontWeight="regular" color="text">
          {price}
        </SWTypography>
        {/* <SWBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <SWTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </SWTypography>
        </SWBox> */}
      </SWBox>
    </SWBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  no: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
