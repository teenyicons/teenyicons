import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTriangle = forwardRef(
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
          d="M7.932 1.248a.5.5 0 00-.864 0l-7 12A.5.5 0 00.5 14h14a.5.5 0 00.432-.752l-7-12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTriangle.displayName = "Triangle";

export default SvgTriangle;
