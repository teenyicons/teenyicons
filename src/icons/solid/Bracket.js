import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBracket = forwardRef(
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
          d="M3.5 1A1.5 1.5 0 002 2.5v10A1.5 1.5 0 003.5 14H5v1H3.5A2.5 2.5 0 011 12.5V8H0V7h1V2.5A2.5 2.5 0 013.5 0H5v1H3.5zM10 0h1.5A2.5 2.5 0 0114 2.5V7h1v1h-1v4.5a2.5 2.5 0 01-2.5 2.5H10v-1h1.5a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0011.5 1H10V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBracket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBracket.displayName = "Bracket";

export default SvgBracket;
