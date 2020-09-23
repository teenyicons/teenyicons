import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M9.5 5.5h-4v4h4v-4z" stroke={color} />
      </svg>
    );
  }
);

SvgStopSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStopSmall.displayName = "StopSmall";

export default SvgStopSmall;
