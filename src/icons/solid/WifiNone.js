import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWifiNone = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path d="M7.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={color} />
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
