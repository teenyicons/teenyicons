import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoon = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoon.displayName = "Moon";

export default SvgMoon;
