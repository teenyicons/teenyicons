import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClockwise = forwardRef(
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
          d="M7.295 2.002L6.147.854l.706-.708L9.207 2.5 6.853 4.85l-.706-.707 1.141-1.141A5.499 5.499 0 002 8.495a5.499 5.499 0 005.5 5.496c3.037 0 5.5-2.462 5.5-5.496v-.5h1v.5a6.499 6.499 0 01-6.5 6.496A6.499 6.499 0 011 8.495a6.499 6.499 0 016.295-6.493z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClockwise.displayName = "Clockwise";

export default SvgClockwise;
