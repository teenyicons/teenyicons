import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopwatch = forwardRef(
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
        <path d="M9 1H6V0h3v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM8 8V5H7v4h3V8H8z"
          fill={color}
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
