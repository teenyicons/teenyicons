import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLock = forwardRef(
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
          d="M11 3.5V6h1.5A1.5 1.5 0 0114 7.5v6a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-6A1.5 1.5 0 012.5 6H4V3.5a3.5 3.5 0 117 0zm-6 0a2.5 2.5 0 015 0V6H5V3.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLock.displayName = "Lock";

export default SvgLock;
