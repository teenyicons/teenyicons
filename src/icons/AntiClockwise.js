import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAntiClockwise = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 2.499l-.354-.354-.353.354.353.353L6.5 2.5zm1-.5H7v1h.5v-1zM2 8.495v-.5H1v.5h1zM8.145.146l-1.999 2 .708.706L8.853.854 8.145.146zM6.146 2.852l2 1.999.707-.707-2-1.999-.707.707zM7.5 3c3.037 0 5.5 2.461 5.5 5.496h1a6.499 6.499 0 00-6.5-6.496v1zM13 8.495a5.499 5.499 0 01-5.5 5.496v1c3.589 0 6.5-2.909 6.5-6.496h-1zM7.5 13.99A5.499 5.499 0 012 8.495H1a6.499 6.499 0 006.5 6.496v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAntiClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAntiClockwise.displayName = "AntiClockwise";

export default SvgAntiClockwise;
