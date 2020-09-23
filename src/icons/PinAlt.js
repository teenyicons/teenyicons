import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPinAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 15V8.5m0 0a4 4 0 100-8 4 4 0 000 8z" stroke={color} />
      </svg>
    );
  }
);

SvgPinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPinAlt.displayName = "PinAlt";

export default SvgPinAlt;
