import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInstagram = forwardRef(
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
        <path d="M7.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 0A4.5 4.5 0 000 4.5v6A4.5 4.5 0 004.5 15h6a4.5 4.5 0 004.5-4.5v-6A4.5 4.5 0 0010.5 0h-6zM4 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM11 4h1V3h-1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInstagram.displayName = "Instagram";

export default SvgInstagram;
