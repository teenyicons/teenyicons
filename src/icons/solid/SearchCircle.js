import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearchCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 4a3 3 0 101.738 5.445l1.409 1.409.707-.707-1.409-1.409A3 3 0 007 4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSearchCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearchCircle.displayName = "SearchCircle";

export default SvgSearchCircle;
