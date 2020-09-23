import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMobile = forwardRef(
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
          d="M2 1.5A1.5 1.5 0 013.5 0h8A1.5 1.5 0 0113 1.5v12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 13.5v-12zM6 12h3v-1H6v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMobile.displayName = "Mobile";

export default SvgMobile;
