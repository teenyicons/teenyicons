import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBin = forwardRef(
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
          d="M11 3V1.5A1.5 1.5 0 009.5 0h-4A1.5 1.5 0 004 1.5V3H0v1h1v9.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V4h1V3h-4zM5 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V3H5V1.5zM7 7v5h1V7H7zm-3 5V9h1v3H4zm6-3v3h1V9h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBin.displayName = "Bin";

export default SvgBin;
