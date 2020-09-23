import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeadset = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 12.5a2 2 0 002-2v-2a2 2 0 00-2-2 1 1 0 00-1 1v4a1 1 0 001 1zm0 0a2 2 0 01-2 2H8m6.5-4.5V7.5a7 7 0 10-14 0V10m2 2.5a1 1 0 001-1v-4a1 1 0 00-1-1 2 2 0 00-2 2v2a2 2 0 002 2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHeadset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeadset.displayName = "Headset";

export default SvgHeadset;
