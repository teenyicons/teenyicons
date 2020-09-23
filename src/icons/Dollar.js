import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDollar = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 10.5a3 3 0 003 3h4a3 3 0 100-6h-4a3 3 0 010-6h4a3 3 0 013 3M7.5 0v1.5m0 13.5v-1.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDollar.displayName = "Dollar";

export default SvgDollar;
