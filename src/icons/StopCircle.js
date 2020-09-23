import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 7.5a7 7 0 1114 0 7 7 0 01-14 0z" stroke={color} />
        <path d="M9.5 5.5h-4v4h4v-4z" stroke={color} />
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
