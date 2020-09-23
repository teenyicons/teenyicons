import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitFork = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 002 4.95v5.1a2.5 2.5 0 101 0V9h6.5A3.5 3.5 0 0013 5.5v-.55a2.5 2.5 0 10-1 0v.55A2.5 2.5 0 019.5 8H3V4.95A2.5 2.5 0 002.5 0z"
          fill={color}
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
