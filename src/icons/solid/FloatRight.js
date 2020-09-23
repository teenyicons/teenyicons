import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloatRight = forwardRef(
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
          d="M9.5 0A1.5 1.5 0 008 1.5v4A1.5 1.5 0 009.5 7h4A1.5 1.5 0 0015 5.5v-4A1.5 1.5 0 0013.5 0h-4zM0 2h6V1H0v1zM0 6h6V5H0v1zM0 10h15V9H0v1zM0 14h15v-1H0v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFloatRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloatRight.displayName = "FloatRight";

export default SvgFloatRight;
