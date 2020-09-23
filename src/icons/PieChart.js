import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPieChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 0v7.5h1V0H7zm.724 7.947l6-3-.448-.894-6 3 .448.894zm-.578-.093l5 5 .708-.708-5-5-.708.708z"
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
