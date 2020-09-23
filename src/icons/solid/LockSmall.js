import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLockSmall = forwardRef(
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
          d="M10 5.5v.585A1.5 1.5 0 0111 7.5v3A1.5 1.5 0 019.5 12h-4A1.5 1.5 0 014 10.5v-3a1.5 1.5 0 011-1.415V5.5a2.5 2.5 0 015 0zm-4 0a1.5 1.5 0 113 0V6H6v-.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLockSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLockSmall.displayName = "LockSmall";

export default SvgLockSmall;
