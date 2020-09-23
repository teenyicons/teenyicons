import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWalletAlt = forwardRef(
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
          d="M14 12.5V10h.43a.57.57 0 00.57-.57V5.57a.57.57 0 00-.57-.57H14V2.5A1.5 1.5 0 0012.5 1h-11A1.5 1.5 0 000 2.5v10A1.5 1.5 0 001.5 14h11a1.5 1.5 0 001.5-1.5zM14 6v3H9.5a1.5 1.5 0 110-3H14z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWalletAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWalletAlt.displayName = "WalletAlt";

export default SvgWalletAlt;
