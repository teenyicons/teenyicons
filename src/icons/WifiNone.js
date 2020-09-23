import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWifiNone = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M6.5 11.5a1 1 0 102 0 1 1 0 00-2 0z" stroke={color} />
      </svg>
    );
  }
);

SvgWifiNone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWifiNone.displayName = "WifiNone";

export default SvgWifiNone;
