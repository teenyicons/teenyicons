import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 7.5H0m15 5h-2.5m2.5-10H8.5m-2 0H0m4.5 5H15m-4.5 5H0m10.5-2v4h2v-4h-2zm-8-5v4h2v-4h-2zm4-5v4h2v-4h-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAdjustHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustHorizontal.displayName = "AdjustHorizontal";

export default SvgAdjustHorizontal;
