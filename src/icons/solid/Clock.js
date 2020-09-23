import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClock = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7 0V3h1v4.293l2.854 2.853-.708.708-3-3A.499.499 0 017 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClock.displayName = "Clock";

export default SvgClock;
