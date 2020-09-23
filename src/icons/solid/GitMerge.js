import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitMerge = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 002 4.95v5.1a2.5 2.5 0 101 0v-5.1A2.503 2.503 0 004.95 3H9.5A2.5 2.5 0 0112 5.5v1.55a2.5 2.5 0 101 0V5.5A3.5 3.5 0 009.5 2H4.95A2.5 2.5 0 002.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGitMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitMerge.displayName = "GitMerge";

export default SvgGitMerge;
