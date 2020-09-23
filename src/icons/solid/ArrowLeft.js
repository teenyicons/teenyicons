import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowLeft = forwardRef(
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
          d="M2.707 8l3.147 3.146-.708.707L.793 7.5l4.353-4.354.708.708L2.707 7H14v1H2.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowLeft.displayName = "ArrowLeft";

export default SvgArrowLeft;
