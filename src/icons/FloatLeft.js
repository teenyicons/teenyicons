import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloatLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9 5.5h6m-6-4h6m-15 8h15m-15 4h15M1.5.5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFloatLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloatLeft.displayName = "FloatLeft";

export default SvgFloatLeft;
