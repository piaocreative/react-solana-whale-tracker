import { forwardRef, createContext, useContext, useMemo } from "react";

import PropTypes from "prop-types";

import SWBox from "components/SWBox";

// Custom styles for MDPagination
import SWPaginationItemRoot from "components/SWPagination/SWPaginationItemRoot";

// The Pagination main context
const Context = createContext();

const SWPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <SWPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </SWPaginationItemRoot>
        ) : (
          <SWBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </SWBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of MDPagination
SWPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the MDPagination
SWPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SWPagination;
