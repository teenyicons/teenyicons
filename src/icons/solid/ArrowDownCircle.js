import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDownCircle = forwardRef(
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
          d="M7.5 0a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm2.707 8.5L7.5 11.207 4.793 8.5l.707-.707 1.5 1.5V4h1v5.293l1.5-1.5.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDownCircle.displayName = "ArrowDownCircle";

export default SvgArrowDownCircle;
