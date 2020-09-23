import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitMerge = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 10.5a2 2 0 100 4 2 2 0 000-4zm0 0v-6m2-2a2 2 0 10-2 2m2-2a2 2 0 01-2 2m2-2h5a3 3 0 013 3v2m0 0a2 2 0 100 4 2 2 0 000-4z"
          stroke={color}
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
