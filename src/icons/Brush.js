import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBrush = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 7.5v-5a2 2 0 00-2-2h-8a2 2 0 00-2 2v5m12 0h-12m12 0v2a2 2 0 01-2 2h-3v2a1 1 0 11-2 0v-2h-3a2 2 0 01-2-2v-2m4-7V5m2-4.5V3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBrush.displayName = "Brush";

export default SvgBrush;
