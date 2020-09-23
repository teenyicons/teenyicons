import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDownSmall = forwardRef(
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
          d="M8 4v5.293l1.5-1.5.707.707L7.5 11.207 4.793 8.5l.707-.707 1.5 1.5V4h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowDownSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDownSmall.displayName = "ArrowDownSmall";

export default SvgArrowDownSmall;
