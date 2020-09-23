import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStopSmall = forwardRef(
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
        <path d="M10 5H5v5h5V5z" fill={color} />
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
