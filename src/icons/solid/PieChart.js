import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPieChart = forwardRef(
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
          d="M7 .016a7.5 7.5 0 105.438 13.13L7.15 7.857A.5.5 0 017 7.5V.016z"
          fill={color}
        />
        <path
          d="M13.145 12.438A7.47 7.47 0 0015 7.5a7.476 7.476 0 00-.581-2.9L8.344 7.637l4.801 4.801zM13.97 3.706A7.499 7.499 0 008 .016v6.675l5.97-2.985z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPieChart.displayName = "PieChart";

export default SvgPieChart;
