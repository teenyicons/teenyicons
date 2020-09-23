import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitCompare = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.5.5l-2 2m0 0l2 2m-2-2h3a3 3 0 013 3v5m-10-6a2 2 0 100-4 2 2 0 000 4zm0 0v5a3 3 0 003 3H8m-1.5 2l2-2-2-2m6 0a2 2 0 100 4 2 2 0 000-4z"
          stroke={color}
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
