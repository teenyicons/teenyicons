import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPin = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          clipRule="evenodd"
          d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
          stroke={color}
          strokeLinecap="square"
        />
        <path
          clipRule="evenodd"
          d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPin.displayName = "Pin";

export default SvgPin;
