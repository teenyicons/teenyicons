import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGanttChart = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h1v14h14v1H0V0zm2 2h3v1H2V2zm1 3h5v1H3V5zm2 3h3v1H5V8zm3 3h7v1H8v-1z"
          fill={color}
        />
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
