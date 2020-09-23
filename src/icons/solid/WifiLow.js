import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWifiLow = forwardRef(
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
        <path
          d="M3.219 9.318c1.155-1.4 2.698-2.161 4.28-2.161 1.584 0 3.127.762 4.282 2.161l.771-.636C11.232 7.08 9.417 6.157 7.5 6.157c-1.918 0-3.732.924-5.052 2.525l.77.636zM6 11.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWifiLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWifiLow.displayName = "WifiLow";

export default SvgWifiLow;
