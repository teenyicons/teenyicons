import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgToggle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M3.5 2.5a1 1 0 110 2 1 1 0 010-2z" stroke={color} />
        <path
          d="M11.5.5h-8a3 3 0 000 6h8a3 3 0 100-6zM11.5 12.5a1 1 0 110-2 1 1 0 010 2z"
          stroke={color}
        />
        <path d="M3.5 14.5h8a3 3 0 100-6h-8a3 3 0 000 6z" stroke={color} />
      </svg>
    );
  }
);

SvgToggle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgToggle.displayName = "Toggle";

export default SvgToggle;
