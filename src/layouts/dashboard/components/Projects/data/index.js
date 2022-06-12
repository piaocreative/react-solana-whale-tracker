import Tooltip from "@mui/material/Tooltip";
import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";
import SWAvatar from "components/SWAvatar";
import item1 from "assets/images/item1.png";
import item2 from "assets/images/item2.png";
import item3 from "assets/images/item3.jpg";
import SWBadge from "components/SWBadge";
import Buyer from "layouts/billing/components/Buyer";

export default function data() {
  const avatars = (item) =>
    item.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SWAvatar
          src={image}
          alt="name"
          // size="xl"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  // const Company = ({ image, name }) => (
  //   <SWBox display="flex" alignItems="center" lineHeight={1}>
  //     <SWAvatar src={image} name={name} size="sm" />
  //     <SWTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </SWTypography>
  //   </SWBox>
  // );

  return {
    columns: [
      { Header: "Buyer", accessor: "buyer", align: "left" },
      { Header: "Type", accessor: "type", align: "left" },
      { Header: "Item", accessor: "item", align: "left" },
      { Header: "Price", accessor: "budget", align: "left" },
      { Header: "Time", accessor: "time", align: "left" },
    ],

    rows: [
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([[item1, "Item1"]])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            3.3 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="BOUGHT" color="success" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([[item2, "Item2"]])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            2.35 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="BOUGHT" color="success" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([[item3, "Item3"]])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            11.9 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="BOUGHT" color="success" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([[item3, "Item3"]])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            0.69 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="BOUGHT" color="success" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([[item3, "Item3"]])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            2.4 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="SOLD" color="error" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
      {
        buyer: <Buyer data="8igPEb..." id="Rank #1" />,
        item: (
          <SWBox display="flex" py={1}>
            {avatars([
              [item1, "item1"],
              // [team4, "Jessica Doe"],
            ])}
          </SWBox>
        ),
        budget: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4.44 SOL
          </SWTypography>
        ),
        type: (
          <SWBox ml={-1}>
            <SWBadge badgeContent="BOUGHT" color="success" variant="gradient" size="sm" />
          </SWBox>
        ),
        time: (
          <SWTypography variant="caption" color="text" fontWeight="medium">
            4m 59s ago
          </SWTypography>
        ),
      },
    ],
  };
}
