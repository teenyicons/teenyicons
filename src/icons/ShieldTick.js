import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShieldTick = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 7.5L7 10l4-5M7.5.5l-7 4v.72a9.651 9.651 0 007 9.28 9.651 9.651 0 007-9.28V4.5l-7-4z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgShieldTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShieldTick.displayName = "ShieldTick";

export default SvgShieldTick;
