import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDenied = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm2.564-4.23a6.5 6.5 0 009.165 9.165L2.564 3.272zm.707-.706l9.165 9.165a6.5 6.5 0 00-9.165-9.165z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDenied.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDenied.displayName = "Denied";

export default SvgDenied;
