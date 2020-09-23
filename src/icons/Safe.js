import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSafe = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 3v3m0 2v3m0 2.5V15m10-1.5V15m-3-5.5a2 2 0 110-4 2 2 0 010 4zm-8-9h12a1 1 0 011 1v11a1 1 0 01-1 1h-12a1 1 0 01-1-1v-11a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSafe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSafe.displayName = "Safe";

export default SvgSafe;
