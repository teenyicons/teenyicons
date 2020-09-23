import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM5 5h5v5H5V5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStopCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStopCircle.displayName = "StopCircle";

export default SvgStopCircle;
