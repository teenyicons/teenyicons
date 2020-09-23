import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1 7.5h13" stroke={color} />
      </svg>
    );
  }
);

SvgMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinus.displayName = "Minus";

export default SvgMinus;
