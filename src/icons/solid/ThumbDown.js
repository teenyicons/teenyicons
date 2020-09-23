import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbDown = forwardRef(
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
          d="M1 10V0H0v10h1zM5.5 0A2.5 2.5 0 003 2.5v7.146l2.776 4.361a2.034 2.034 0 003.536-2.002L8.309 10H12.5A2.5 2.5 0 0015 7.5V4.333L12.5 1a2.5 2.5 0 00-2-1h-5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgThumbDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbDown.displayName = "ThumbDown";

export default SvgThumbDown;
