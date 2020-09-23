import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalculator = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h10A1.5 1.5 0 0114 1.5v12a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 5h7V4H4v1zm0 4h1V8H4v1zm4 0H7V8h1v1zm2 0h1V8h-1v1zm-5 3H4v-1h1v1zm2 0h1v-1H7v1zm4 0h-1v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCalculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalculator.displayName = "Calculator";

export default SvgCalculator;
