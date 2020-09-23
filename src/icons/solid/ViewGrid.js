import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgViewGrid = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1V0h1v1h3V0h1v1h3V0h1v1h3V0h1v1h1v1h-1v3h1v1h-1v3h1v1h-1v3h1v1h-1v1h-1v-1h-3v1H9v-1H6v1H5v-1H2v1H1v-1H0v-1h1v-3H0V9h1V6H0V5h1V2H0V1h1zm1 1v3h3V2H2zm4 0v3h3V2H6zm4 0v3h3V2h-3zm3 4h-3v3h3V6zm0 4h-3v3h3v-3zm-4 3v-3H6v3h3zm-4 0v-3H2v3h3zM2 9h3V6H2v3zm4-3v3h3V6H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgViewGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgViewGrid.displayName = "ViewGrid";

export default SvgViewGrid;
