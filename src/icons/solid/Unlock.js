import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnlock = forwardRef(
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
          d="M5 3.5a2.5 2.5 0 015 0V4h1v-.5a3.5 3.5 0 10-7 0V6H2.5A1.5 1.5 0 001 7.5v6A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0012.5 6H5V3.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUnlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnlock.displayName = "Unlock";

export default SvgUnlock;
