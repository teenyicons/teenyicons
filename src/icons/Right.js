import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M5 14l7-6.5L5 1" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRight.displayName = "Right";

export default SvgRight;
