import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPrint = forwardRef(
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
          d="M3 1.5A1.5 1.5 0 014.5 0h6A1.5 1.5 0 0112 1.5V5H3V1.5zM1.5 6A1.5 1.5 0 000 7.5v4A1.5 1.5 0 001.5 13H2V9h11v4h.5a1.5 1.5 0 001.5-1.5v-4A1.5 1.5 0 0013.5 6h-12z"
          fill={color}
        />
        <path d="M3 10h9v5H3v-5z" fill={color} />
      </svg>
    );
  }
);

SvgPrint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPrint.displayName = "Print";

export default SvgPrint;
