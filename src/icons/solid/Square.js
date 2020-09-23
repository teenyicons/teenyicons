import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSquare = forwardRef(
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
          d="M1.5 0A1.5 1.5 0 000 1.5v12A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSquare.displayName = "Square";

export default SvgSquare;
