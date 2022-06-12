import Card from "@mui/material/Card";

import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";
// import SWButton from "components/SWButton";

import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <SWBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SWTypography variant="h4" fontWeight="medium">
          Biggest Whales
        </SWTypography>
        {/* <SWButton variant="outlined" color="info" size="small">
          view all
        </SWButton> */}
      </SWBox>
      <SWBox px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SWTypography variant="button" fontWeight="regular" color="text">
          SOL spent in the last 14 days
        </SWTypography>
      </SWBox>
      <SWBox p={2}>
        <SWBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice no="1" date="8igPEb..." id="Rank #1" price="2224 SOL" />
          <Invoice no="2" date="8igPEb..." id="Rank #2" price="2224 SOL" />
          <Invoice no="2" date="G9WB68..." id="Rank #3" price="1649 SOL" />
          <Invoice no="3" date="G9WB68..." id="Rank #4" price="1623 SOL" />
          <Invoice no="4" date="G9WB68..." id="Rank #5" price="1331 SOL" />
          <Invoice no="5" date="G9WB68..." id="Rank #6" price="1198 SOL" />
          <Invoice no="6" date="G9WB68..." id="Rank #6" price="1198 SOL" />
          <Invoice no="7" date="G9WB68..." id="Rank #7" price="1198 SOL" />
        </SWBox>
      </SWBox>
    </Card>
  );
}

export default Invoices;
