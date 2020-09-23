import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSlack = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5 7.5V6A1.5 1.5 0 1112 7.5h-1.5zm0 0h-3m3 0V2a1.5 1.5 0 10-3 0v5.5m0 0v-3m0 3H2a1.5 1.5 0 110-3h5.5m0 3H13a1.5 1.5 0 010 3H7.5m0-3v3m0-3h-3m3 0V13a1.5 1.5 0 01-3 0V7.5m3-3V3A1.5 1.5 0 106 4.5h1.5zm0 6H9A1.5 1.5 0 117.5 12v-1.5zm-3-3V9A1.5 1.5 0 113 7.5h1.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSlack.displayName = "Slack";

export default SvgSlack;
