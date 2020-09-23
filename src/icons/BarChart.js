import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBarChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M0 14.5h15M5.5 12V6m4 6V3m4 9V0m-12 9v3" stroke={color} />
      </svg>
    );
  }
);

SvgBarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBarChart.displayName = "BarChart";

export default SvgBarChart;
