import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlug = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 11.5V15m2-3.5V15m-4-15v4.5m6-4.5v4.5m-8 0h10v3h-1v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2h-1v-3z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlug.displayName = "Plug";

export default SvgPlug;
