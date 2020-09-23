import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustHorizontal = forwardRef(
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
          d="M9 0H6v2H0v1h6v2h3V3h6V2H9V0zM5 5H2v2H0v1h2v2h3V8h10V7H5V5zM13 10h-3v2H0v1h10v2h3v-2h2v-1h-2v-2z"
          fill={color}
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
