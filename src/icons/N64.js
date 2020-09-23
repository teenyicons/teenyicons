import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgN64 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4v3M3 5.5h3m3 0h1m1 1h1m-7.5-4h-1a3 3 0 00-3 3v4.838a1.162 1.162 0 002.265.367L3.5 8.5h1.095a1 1 0 01.995.9l.26 2.607a1.657 1.657 0 003.3 0L9.41 9.4a1 1 0 01.995-.9H11.5l.735 2.205a1.162 1.162 0 002.265-.367V5.5a3 3 0 00-3-3h-1l-1-1h-4l-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgN64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgN64.displayName = "N64";

export default SvgN64;
