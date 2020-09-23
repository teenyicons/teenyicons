import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuote = forwardRef(
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
          d="M2.5 1A1.5 1.5 0 001 2.5V10a4 4 0 004 4v-1a3 3 0 01-3-3V7h3.5A1.5 1.5 0 007 5.5v-3A1.5 1.5 0 005.5 1h-3zM9.5 1A1.5 1.5 0 008 2.5V10a4 4 0 004 4v-1a3 3 0 01-3-3V7h3.5A1.5 1.5 0 0014 5.5v-3A1.5 1.5 0 0012.5 1h-3z"
          fill={color}
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
