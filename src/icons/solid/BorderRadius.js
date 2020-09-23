import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderRadius = forwardRef(
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
          d="M5.5 2A3.5 3.5 0 002 5.5V8H1V5.5A4.5 4.5 0 015.5 1H8v1H5.5zM11 2h-1V1h1v1zm3 0h-1V1h1v1zm0 3h-1V4h1v1zm0 3h-1V7h1v1zM2 11H1v-1h1v1zm12 0h-1v-1h1v1zM2 14H1v-1h1v1zm3 0H4v-1h1v1zm3 0H7v-1h1v1zm3 0h-1v-1h1v1zm3 0h-1v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderRadius.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderRadius.displayName = "BorderRadius";

export default SvgBorderRadius;
