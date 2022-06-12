import { useState, useEffect } from "react";
// import GitHubButton from "react-github-btn";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import SWBox from "components/SWBox";
import SWTypography from "components/SWTypography";
import SWButton from "components/SWButton";
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";
import {
  useMaterialUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? background.sidenav : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? background.sidenav : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });

  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.sidenav : white.main,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.sidenav : white.main,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <SWBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <SWBox>
          <SWTypography variant="h5">Theme Configurator</SWTypography>
          <SWTypography variant="body2" color="text">
            See options.
          </SWTypography>
        </SWBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SWBox>

      <Divider />

      <SWBox pt={0.5} pb={3} px={3}>
        <SWBox>
          <SWTypography variant="h6">Sidenav Colors</SWTypography>

          <SWBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({
                  borders: { borderWidth },
                  palette: { white, dark, background },
                  transitions,
                }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
                  borderColor: () => {
                    let borderColorValue = sidenavColor === color && dark.main;

                    if (darkMode && sidenavColor === color) {
                      borderColorValue = white.main;
                    }

                    return borderColorValue;
                  },
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: darkMode ? white.main : dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </SWBox>
        </SWBox>

        <SWBox mt={3} lineHeight={1}>
          <SWTypography variant="h6">Sidenav Type</SWTypography>
          <SWTypography variant="button" color="text">
            Choose between different sidenav types.
          </SWTypography>

          <SWBox
            sx={{
              display: "flex",
              mt: 2,
              mr: 1,
            }}
          >
            <SWButton
              color="dark"
              variant="gradient"
              onClick={handleDarkSidenav}
              disabled={disabled}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              Dark
            </SWButton>
            <SWBox sx={{ mx: 1, width: "8rem", minWidth: "8rem" }}>
              <SWButton
                color="dark"
                variant="gradient"
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                Transparent
              </SWButton>
            </SWBox>
            <SWButton
              color="dark"
              variant="gradient"
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              White
            </SWButton>
          </SWBox>
        </SWBox>
        <SWBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          lineHeight={1}
        >
          <SWTypography variant="h6">Navbar Fixed</SWTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </SWBox>
        <Divider />
        <SWBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <SWTypography variant="h6">Light / Dark</SWTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </SWBox>
        <Divider />
        {/* <SWBox mt={3} mb={2}>
          <SWButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/"
            target="_blank"
            rel="noreferrer"
            color={darkMode ? "light" : "dark"}
            variant="outlined"
            fullWidth
          >
            view documentation
          </SWButton>
        </SWBox>
        <SWBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/material-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/material-dashboard-react on GitHub"
          >
            Star
          </GitHubButton>
        </SWBox>
        <SWBox mt={2} textAlign="center">
          <SWBox mb={0.5}>
            <SWTypography variant="h6">Thank you for sharing!</SWTypography>
          </SWBox>

          <SWBox display="flex" justifyContent="center">
            <SWBox mr={1.5}>
              <SWButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20Material%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-dashboard-react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </SWButton>
            </SWBox>
            <SWButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </SWButton>
          </SWBox>
        </SWBox> */}
      </SWBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
