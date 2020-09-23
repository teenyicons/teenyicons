import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPython = forwardRef(
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
          d="M3 12H1.5A1.5 1.5 0 010 10.5v-5A1.5 1.5 0 011.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 015.5 0h4A1.5 1.5 0 0111 1.5v5a.5.5 0 01-.5.5h-6A1.5 1.5 0 003 8.5V12z"
          fill={color}
        />
        <path
          d="M12 3v3.5A1.5 1.5 0 0110.5 8h-6a.5.5 0 00-.5.5v5A1.5 1.5 0 005.5 15h4a1.5 1.5 0 001.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0015 9.5v-5A1.5 1.5 0 0013.5 3H12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPython.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPython.displayName = "Python";

export default SvgPython;
