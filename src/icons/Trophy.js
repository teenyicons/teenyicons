import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrophy = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 14.5h7m-3.5 0v-5m0 0a4 4 0 004-4v-4a1 1 0 00-1-1h-6a1 1 0 00-1 1v4a4 4 0 004 4zm-4-7h-1a2 2 0 100 4h1m8-4h1a2 2 0 110 4h-1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgTrophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTrophy.displayName = "Trophy";

export default SvgTrophy;
