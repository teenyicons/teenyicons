import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChrome = forwardRef(
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
          d="M2.503 1.907A7.472 7.472 0 017.5 0a7.498 7.498 0 016.635 4H7.5a3.501 3.501 0 00-3.23 2.149L2.503 1.907z"
          fill={color}
        />
        <path
          d="M1.745 2.69a7.503 7.503 0 003.41 11.937l2.812-3.658a3.501 3.501 0 01-3.88-2.685.502.502 0 01-.049-.092L1.745 2.69z"
          fill={color}
        />
        <path
          d="M6.215 14.89a7.5 7.5 0 008.357-9.895A.503.503 0 0114.5 5H9.95A3.49 3.49 0 0111 7.5a3.487 3.487 0 01-.954 2.405L6.216 14.89z"
          fill={color}
        />
        <path d="M5 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={color} />
      </svg>
    );
  }
);

SvgChrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChrome.displayName = "Chrome";

export default SvgChrome;
