import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 7.5a7 7 0 1014 0 7 7 0 00-14 0z" stroke={color} />
      </svg>
    );
  }
);

SvgCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCircle.displayName = "Circle";

export default SvgCircle;
