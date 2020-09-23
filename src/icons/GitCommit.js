import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitCommit = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 10.5a3 3 0 010-6m0 6a3 3 0 000-6m0 6V15m0-10.5V0"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGitCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitCommit.displayName = "GitCommit";

export default SvgGitCommit;
