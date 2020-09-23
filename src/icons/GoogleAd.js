import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleAd = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 10V7a1.5 1.5 0 113 0v3m5-5v5m0-2.5h-2a1 1 0 000 2h2m-8-1h3m-4-6h10a2 2 0 012 2v6a2 2 0 01-2 2h-10a2 2 0 01-2-2v-6a2 2 0 012-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGoogleAd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleAd.displayName = "GoogleAd";

export default SvgGoogleAd;
