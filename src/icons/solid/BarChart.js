import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBarChart = forwardRef(
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
          d="M13 0h1v12h-1V0zm-3 3v9H9V3h1zM6 6v6H5V6h1zm-5 6V9h1v3H1zm14 3H0v-1h15v1z"
          fill={color}
        />
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
