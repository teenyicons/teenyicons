import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWalletAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 6V2.5a1 1 0 00-1-1h-11a1 1 0 00-1 1v10a1 1 0 001 1h11a1 1 0 001-1V9m.93-3.5H9.5a2 2 0 100 4h4.93a.07.07 0 00.07-.07V5.57a.07.07 0 00-.07-.07z"
          stroke={color}
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
