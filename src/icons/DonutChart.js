import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDonutChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zm2.697 6.46l3.5-1.5-.394-.92-3.5 1.5.394.92zM7 0v4.5h1V0H7zm2.146 9.854l3 3 .708-.708-3-3-.708.708zM7.5 10A2.5 2.5 0 015 7.5H4A3.5 3.5 0 007.5 11v-1zM10 7.5A2.5 2.5 0 017.5 10v1A3.5 3.5 0 0011 7.5h-1zM7.5 5A2.5 2.5 0 0110 7.5h1A3.5 3.5 0 007.5 4v1zm0-1A3.5 3.5 0 004 7.5h1A2.5 2.5 0 017.5 5V4z"
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
