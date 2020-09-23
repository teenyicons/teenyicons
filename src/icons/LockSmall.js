import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLockSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 7h4V6h-4v1zm4.5.5v3h1v-3h-1zM9.5 11h-4v1h4v-1zM5 10.5v-3H4v3h1zm.5.5a.5.5 0 01-.5-.5H4A1.5 1.5 0 005.5 12v-1zm4.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM9.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 009.5 6v1zm-4-1A1.5 1.5 0 004 7.5h1a.5.5 0 01.5-.5V6zm.5.5v-1H5v1h1zm3-1v1h1v-1H9zM7.5 4A1.5 1.5 0 019 5.5h1A2.5 2.5 0 007.5 3v1zM6 5.5A1.5 1.5 0 017.5 4V3A2.5 2.5 0 005 5.5h1z"
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
