import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEditCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm8.146-3.354a.5.5 0 01.708 0l2 2a.5.5 0 010 .708L6.707 11H4.5a.5.5 0 01-.5-.5V8.293l4.146-4.147z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEditCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEditCircle.displayName = "EditCircle";

export default SvgEditCircle;
