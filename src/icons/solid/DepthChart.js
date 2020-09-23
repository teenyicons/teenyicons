import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDepthChart = forwardRef(
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
          d="M1 0H0v15h15V0h-1v5h-2v2h-1v3H9v2H8v-1H7V8H5V5H3V4H1V0z"
          fill={color}
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
