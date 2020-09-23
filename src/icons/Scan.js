import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScan = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 5V2.5a2 2 0 012-2H5m5 0h2.5a2 2 0 012 2V5m-14 5v2.5a2 2 0 002 2H5m9.5-4.5v2.5a2 2 0 01-2 2H10m-8-7h11"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgScan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScan.displayName = "Scan";

export default SvgScan;
