import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLock = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.5v-3a3 3 0 016 0v3m-8 0h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLock.displayName = "Lock";

export default SvgLock;
