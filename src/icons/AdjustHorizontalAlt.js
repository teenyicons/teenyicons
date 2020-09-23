import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustHorizontalAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M15 3.5H6.5m0 0a2 2 0 10-4 0m4 0a2 2 0 11-4 0m0 0H0m15 8h-2.5m0 0a2 2 0 10-4 0m4 0a2 2 0 11-4 0m0 0H0"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAdjustHorizontalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustHorizontalAlt.displayName = "AdjustHorizontalAlt";

export default SvgAdjustHorizontalAlt;
