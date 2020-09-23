import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBitcoin = forwardRef(
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
          d="M3 1V0h1v1h3V0h1v1h.5a3.5 3.5 0 012.21 6.215A3.501 3.501 0 019.5 14H8v1H7v-1H4v1H3v-1H2v-1h1V8H2V7h1V2H2V1h1zm1 1v5h4.5a2.5 2.5 0 000-5H4zm0 6h5.5a2.5 2.5 0 010 5H4V8z"
          fill={color}
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
