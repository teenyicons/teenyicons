import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAntiClockwise = forwardRef(
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
          d="M8.145.146l.708.708-1.149 1.148A6.499 6.499 0 0114 8.495a6.499 6.499 0 01-6.5 6.496A6.499 6.499 0 011 8.495v-.5h1v.5a5.499 5.499 0 005.5 5.496c3.037 0 5.5-2.462 5.5-5.496a5.499 5.499 0 00-5.289-5.492l1.142 1.14-.708.708-2.352-2.352L8.145.146z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAntiClockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAntiClockwise.displayName = "AntiClockwise";

export default SvgAntiClockwise;
