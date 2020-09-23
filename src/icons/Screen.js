import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreen = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 14.5h7M.5 2.5v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreen.displayName = "Screen";

export default SvgScreen;
