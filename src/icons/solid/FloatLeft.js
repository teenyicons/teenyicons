import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloatLeft = forwardRef(
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
          d="M1.5 0A1.5 1.5 0 000 1.5v4A1.5 1.5 0 001.5 7h4A1.5 1.5 0 007 5.5v-4A1.5 1.5 0 005.5 0h-4zM9 2h6V1H9v1zM9 6h6V5H9v1zM0 10h15V9H0v1zM0 14h15v-1H0v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFloatLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloatLeft.displayName = "FloatLeft";

export default SvgFloatLeft;
