import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbUp = forwardRef(
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
          d="M9.312 2.995A2.034 2.034 0 005.776.992L3 5.354V12.5A2.5 2.5 0 005.5 15h5a2.5 2.5 0 002-1l2.5-3.333V7.5A2.5 2.5 0 0012.5 5H8.309l1.003-2.005zM0 5v10h1V5H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgThumbUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbUp.displayName = "ThumbUp";

export default SvgThumbUp;
