import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinus = forwardRef(
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
          d="M14 8H1V7h13v1z"
          fill={color}
        />
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
