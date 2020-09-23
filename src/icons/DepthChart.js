import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDepthChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 0v14.5h14V0M.5 4.5h2v1h2v3h2v3h1v3-2h2v-2h2v-3h1v-2h2"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDepthChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDepthChart.displayName = "DepthChart";

export default SvgDepthChart;
