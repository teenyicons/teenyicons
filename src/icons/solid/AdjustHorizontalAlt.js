import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustHorizontalAlt = forwardRef(
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
          d="M4.5 1a2.5 2.5 0 00-2.45 2H0v1h2.05a2.5 2.5 0 004.9 0H15V3H6.95A2.5 2.5 0 004.5 1zM10.5 9a2.5 2.5 0 00-2.45 2H0v1h8.05a2.5 2.5 0 004.9 0H15v-1h-2.05a2.5 2.5 0 00-2.45-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAdjustHorizontalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustHorizontalAlt.displayName = "AdjustHorizontalAlt";

export default SvgAdjustHorizontalAlt;
