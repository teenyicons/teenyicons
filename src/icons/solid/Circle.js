import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCircle = forwardRef(
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
        <path d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" fill={color} />
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
