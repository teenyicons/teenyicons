import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustVerticalAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 0v8.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15m8-15v2.5m0 0a2 2 0 100 4m0-4a2 2 0 110 4m0 0V15"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAdjustVerticalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustVerticalAlt.displayName = "AdjustVerticalAlt";

export default SvgAdjustVerticalAlt;
