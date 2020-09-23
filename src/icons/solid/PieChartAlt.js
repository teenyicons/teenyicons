import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPieChartAlt = forwardRef(
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
        <path d="M6.5 0H6v9h9v-.5A8.5 8.5 0 006.5 0z" fill={color} />
        <path d="M12.826 10H5V2.174A6.5 6.5 0 1012.826 10z" fill={color} />
      </svg>
    );
  }
);

SvgPieChartAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPieChartAlt.displayName = "PieChartAlt";

export default SvgPieChartAlt;
