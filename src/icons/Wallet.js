import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWallet = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 3.5v9a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1H3m-2.5 0v-1a1 1 0 011-1h8a1 1 0 011 1v1H3m-2.5 0H3m6 6h3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWallet.displayName = "Wallet";

export default SvgWallet;
