import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitPull = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 002 4.95v5.1a2.5 2.5 0 101 0v-5.1A2.5 2.5 0 002.5 0zM8.854.854L8.146.146 5.793 2.5l2.353 2.354.708-.708L7.707 3H9.5A2.5 2.5 0 0112 5.5v1.55a2.5 2.5 0 101 0V5.5A3.5 3.5 0 009.5 2H7.707L8.854.854z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGitPull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitPull.displayName = "GitPull";

export default SvgGitPull;
