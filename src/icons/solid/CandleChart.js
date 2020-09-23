import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCandleChart = forwardRef(
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
        <path d="M1 0H0v15h15v-1H1V0z" fill={color} />
        <path
          d="M8 0v3H7v5h3V3H9V0H8zM3 4v1H2v5h1v2h1v-2h1V5H4V4H3zM12 6h1V4h1v2h1v5h-1v2h-1v-2h-1V6z"
          fill={color}
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
