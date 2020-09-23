import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAreaChart = forwardRef(
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
          d="M1 0H0v15h15V2.5a.5.5 0 00-.907-.29L9.49 8.653 6.9 5.2a.5.5 0 00-.816.023L1 12.849V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAreaChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAreaChart.displayName = "AreaChart";

export default SvgAreaChart;
