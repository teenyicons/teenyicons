import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeftCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm9 4.207L4.793 7.5 9 3.293v8.414z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeftCircle.displayName = "LeftCircle";

export default SvgLeftCircle;
