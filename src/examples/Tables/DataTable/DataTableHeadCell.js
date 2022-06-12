import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import SWBox from "components/SWBox";
import { useMaterialUIController } from "context";

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <SWBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <SWBox
        {...rest}
        position="relative"
        textAlign={align}
        color={darkMode ? "white" : "secondary"}
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: "uppercase",
          cursor: sorted && "pointer",
          userSelect: sorted && "none",
        })}
      >
        {children}
        {sorted && (
          <SWBox
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <SWBox
              position="absolute"
              top={-6}
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </SWBox>
            <SWBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </SWBox>
          </SWBox>
        )}
      </SWBox>
    </SWBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableHeadCell;
