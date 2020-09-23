import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuote = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 6.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10A3.5 3.5 0 005 13.5m3.5-7h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10a3.5 3.5 0 003.5 3.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgQuote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQuote.displayName = "Quote";

export default SvgQuote;
