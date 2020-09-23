import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M10 14L3 7.5 10 1" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeft.displayName = "Left";

export default SvgLeft;
