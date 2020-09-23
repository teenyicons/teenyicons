import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitCompare = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 002 4.95V9.5A3.5 3.5 0 005.5 13h1.793l-1.147 1.146.708.708L9.207 12.5l-2.353-2.354-.708.708L7.293 12H5.5A2.5 2.5 0 013 9.5V4.95A2.5 2.5 0 002.5 0zM8.854.854L8.146.146 5.793 2.5l2.353 2.354.708-.708L7.707 3H9.5A2.5 2.5 0 0112 5.5v4.55a2.5 2.5 0 101 0V5.5A3.5 3.5 0 009.5 2H7.707L8.854.854z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGitCompare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitCompare.displayName = "GitCompare";

export default SvgGitCompare;
