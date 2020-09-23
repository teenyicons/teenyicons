import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBitcoin = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 1.5h5a3 3 0 110 6h-5m0-6v6m0-6H2m1.5 0V0m0 7.5h6a3 3 0 110 6h-6m0-6v6m0-6H2m1.5 6H2m1.5 0V15m4-15v1.5m0 12V15"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBitcoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBitcoin.displayName = "Bitcoin";

export default SvgBitcoin;
