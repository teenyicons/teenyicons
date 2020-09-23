import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M14 5l-6.5 7L1 5" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDown.displayName = "Down";

export default SvgDown;
