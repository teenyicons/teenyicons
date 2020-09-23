import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgViewGrid = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15M9.5 0v15m4-15v15m-8-15v15m-4-15v15"
          stroke={color}
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
