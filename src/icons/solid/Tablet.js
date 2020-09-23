import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTablet = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h10A1.5 1.5 0 0114 1.5v12a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM6 12h3v-1H6v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTablet.displayName = "Tablet";

export default SvgTablet;
