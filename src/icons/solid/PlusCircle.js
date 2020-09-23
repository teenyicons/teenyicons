import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlusCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 11V8H4V7h3V4h1v3h3v1H8v3H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlusCircle.displayName = "PlusCircle";

export default SvgPlusCircle;
