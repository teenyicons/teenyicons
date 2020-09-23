import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGanttChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 0v14.5H15M5 2.5H2m6 3H3m5 3H5m10 3H8" stroke={color} />
      </svg>
    );
  }
);

SvgGanttChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGanttChart.displayName = "GanttChart";

export default SvgGanttChart;
