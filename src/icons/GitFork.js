import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitFork = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 4.5a2 2 0 110-4 2 2 0 010 4zm0 0v6m0 0a2 2 0 110 4 2 2 0 010-4zm10-6a2 2 0 110-4 2 2 0 010 4zm0 0v1a3 3 0 01-3 3h-7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGitFork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitFork.displayName = "GitFork";

export default SvgGitFork;
