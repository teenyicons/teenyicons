import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScan = forwardRef(
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
          d="M2.5 1A1.5 1.5 0 001 2.5V5H0V2.5A2.5 2.5 0 012.5 0H5v1H2.5zm10 0H10V0h2.5A2.5 2.5 0 0115 2.5V5h-1V2.5A1.5 1.5 0 0012.5 1zm.5 7H2V7h11v1zM0 12.5V10h1v2.5A1.5 1.5 0 002.5 14H5v1H2.5A2.5 2.5 0 010 12.5zm14 0V10h1v2.5a2.5 2.5 0 01-2.5 2.5H10v-1h2.5a1.5 1.5 0 001.5-1.5z"
          fill={color}
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
