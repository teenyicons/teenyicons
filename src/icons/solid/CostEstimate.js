import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCostEstimate = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 4h3v1H4V4zm7 3H4v1h7V7zm0 3H8v1h3v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCostEstimate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCostEstimate.displayName = "CostEstimate";

export default SvgCostEstimate;
