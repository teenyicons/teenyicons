import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCandleChart = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 0v14.5H15M8.5 0v3.5m-5 6V12m0-8v1.5m10-1.5v2.5m0 4V13m-11-7.5h2v4h-2v-4zm5-2h2v4h-2v-4zm5 3h2v4h-2v-4z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCandleChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCandleChart.displayName = "CandleChart";

export default SvgCandleChart;
