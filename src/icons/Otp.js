import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOtp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6 5.5h3m-1.5 0V10m3 0V7.5m0 0v-2h1a1 1 0 110 2h-1zm-6-1v2a1 1 0 01-2 0v-2a1 1 0 012 0zm-3-6h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgOtp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOtp.displayName = "Otp";

export default SvgOtp;
