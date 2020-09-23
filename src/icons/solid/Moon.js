import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoon = forwardRef(
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
          d="M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z"
          fill={color}
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
