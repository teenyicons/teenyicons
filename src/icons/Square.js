import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSquare = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5.5h-12a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-12a1 1 0 00-1-1z"
          stroke={color}
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
