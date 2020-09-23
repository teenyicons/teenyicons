import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowUpSmall = forwardRef(
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
          d="M7.5 3.793L10.207 6.5l-.707.707-1.5-1.5V11H7V5.707l-1.5 1.5-.707-.707L7.5 3.793z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowUpSmall.displayName = "ArrowUpSmall";

export default SvgArrowUpSmall;
