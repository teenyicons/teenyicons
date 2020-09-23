import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEuro = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.374 3A6 6 0 002.5 6.5v2A6 6 0 0013.374 12M0 5.5h7m-7 4h7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgEuro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEuro.displayName = "Euro";

export default SvgEuro;
