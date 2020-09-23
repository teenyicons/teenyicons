import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowUpCircle = forwardRef(
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
          d="M7.5 15a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM4.793 6.5L7.5 3.793 10.207 6.5l-.707.707-1.5-1.5V11H7V5.707l-1.5 1.5-.707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowUpCircle.displayName = "ArrowUpCircle";

export default SvgArrowUpCircle;
