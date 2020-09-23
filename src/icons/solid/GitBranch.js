import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitBranch = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 002 4.95v5.1A2.5 2.5 0 104.95 13H9.5A3.5 3.5 0 0013 9.5V7.95a2.5 2.5 0 10-1 0V9.5A2.5 2.5 0 019.5 12H4.95A2.503 2.503 0 003 10.05v-5.1A2.5 2.5 0 002.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGitBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitBranch.displayName = "GitBranch";

export default SvgGitBranch;
