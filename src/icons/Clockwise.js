import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClockwise = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14 8.495v-.5h-1v.5h1zM7.5 2.999H8v-1h-.5v1zm1-.5l.353.353.354-.353-.354-.354-.353.354zM13 8.495a5.499 5.499 0 01-5.5 5.496v1c3.589 0 6.5-2.909 6.5-6.496h-1zM7.5 13.99A5.499 5.499 0 012 8.495H1a6.499 6.499 0 006.5 6.496v-1zM2 8.495a5.499 5.499 0 015.5-5.496v-1A6.499 6.499 0 001 8.495h1zM6.147.854l2 1.998.706-.707-2-1.999-.706.708zm2 1.291l-2 1.999.706.707 2-1.999-.706-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClockwise.displayName = "Clockwise";

export default SvgClockwise;
