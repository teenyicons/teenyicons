import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLockCircle = forwardRef(
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
          d="M7.5 4A1.5 1.5 0 006 5.5V6h3v-.5A1.5 1.5 0 007.5 4z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 0a7.5 7.5 0 110 15 7.5 7.5 0 010-15zM5 5.5v.585A1.5 1.5 0 004 7.5v3A1.5 1.5 0 005.5 12h4a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1-1.415V5.5a2.5 2.5 0 00-5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLockCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLockCircle.displayName = "LockCircle";

export default SvgLockCircle;
