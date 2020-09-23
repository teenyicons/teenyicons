import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrendDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 3.5L5 8l3-3 6.5 6.5m0 0V5m0 6.5H8" stroke={color} />
      </svg>
    );
  }
);

SvgTrendDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTrendDown.displayName = "TrendDown";

export default SvgTrendDown;
