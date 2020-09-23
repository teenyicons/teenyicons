import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPieChartAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5.5V0a.5.5 0 00-.5.5h.5zm8 8V9a.5.5 0 00.5-.5h-.5zm-8 0H6V9h.5v-.5zm0 6.5A6.5 6.5 0 0013 8.5h-1A5.5 5.5 0 016.5 14v1zM0 8.5A6.5 6.5 0 006.5 15v-1A5.5 5.5 0 011 8.5H0zm1 0A5.5 5.5 0 016.5 3V2A6.5 6.5 0 000 8.5h1zM6.5 1A7.5 7.5 0 0114 8.5h1A8.5 8.5 0 006.5 0v1zM6 .5v8h1v-8H6zM6.5 9h8V8h-8v1z"
          fill={color}
        />
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
