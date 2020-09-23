import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrendUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 11.5L5 7l3 3 6.5-6.5m0 0V10m0-6.5H8" stroke={color} />
      </svg>
    );
  }
);

SvgTrendUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTrendUp.displayName = "TrendUp";

export default SvgTrendUp;
