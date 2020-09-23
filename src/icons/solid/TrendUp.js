import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrendUp = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3h7v7h-1V4.707l-6 6-3-3-4.146 4.147-.708-.708L5 6.293l3 3L13.293 4H8V3z"
          fill={color}
        />
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
