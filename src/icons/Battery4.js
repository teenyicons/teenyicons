import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBattery4 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 10V5m-12 6V4m2 7V4m2 7V4m2 7V4m4 7.5v-8a1 1 0 00-1-1h-10a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBattery4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBattery4.displayName = "Battery4";

export default SvgBattery4;
