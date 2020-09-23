import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalculator = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 4.5h7m-7 4h1m2 0h1m2 0h1m-7 3h1m2 0h1m2 0h1m-8.5 3h10a1 1 0 001-1v-12a1 1 0 00-1-1h-10a1 1 0 00-1 1v12a1 1 0 001 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCalculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalculator.displayName = "Calculator";

export default SvgCalculator;
