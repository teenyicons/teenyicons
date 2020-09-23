import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloatRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 5.5h6m-6-4h6m-6 8h15m-15 4h15M9.5.5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFloatRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloatRight.displayName = "FloatRight";

export default SvgFloatRight;
