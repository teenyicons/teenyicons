import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNes = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 7v3M2 8.5h3m6 1h1m-3 0h1m-8.5-6h12a1 1 0 011 1v6a1 1 0 01-1 1h-12a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgNes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNes.displayName = "Nes";

export default SvgNes;
