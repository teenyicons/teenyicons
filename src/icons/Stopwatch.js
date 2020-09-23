import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopwatch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 5v3.5H10m-4-8h3m-1.5 2a6 6 0 100 12 6 6 0 000-12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgStopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStopwatch.displayName = "Stopwatch";

export default SvgStopwatch;
