import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitCommit = forwardRef(
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
          d="M4 7.5a3.5 3.5 0 013-3.465V0h1v4.035a3.5 3.5 0 010 6.93V15H7v-4.035A3.5 3.5 0 014 7.5z"
          fill={color}
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
