import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDonutChart = forwardRef(
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
          d="M0 7.5A7.5 7.5 0 017 .016v4.02a3.5 3.5 0 102.596 6.267l2.842 2.842A7.5 7.5 0 010 7.5z"
          fill={color}
        />
        <path
          d="M13.145 12.438A7.471 7.471 0 0015 7.5c0-1.034-.21-2.018-.587-2.914L10.755 6.21c.158.4.245.834.245 1.289 0 .786-.26 1.512-.697 2.096l2.842 2.842zM8 4.035V.016a7.499 7.499 0 015.963 3.676L10.254 5.34A3.497 3.497 0 008 4.035z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDonutChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDonutChart.displayName = "DonutChart";

export default SvgDonutChart;
