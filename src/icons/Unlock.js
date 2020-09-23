import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnlock = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.5v-3a3 3 0 016 0V4m-8 2.5h10a1 1 0 011 1v6a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgUnlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnlock.displayName = "Unlock";

export default SvgUnlock;
