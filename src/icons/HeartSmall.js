import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeartSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 5.5l1 1 1-1a1.414 1.414 0 112 2l-3 3-3-3a1.414 1.414 0 112-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHeartSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeartSmall.displayName = "HeartSmall";

export default SvgHeartSmall;
