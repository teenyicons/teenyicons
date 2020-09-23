import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitlab = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 8.5l7 6 7-6-2-8-2 6h-6l-2-6-2 8z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgGitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitlab.displayName = "Gitlab";

export default SvgGitlab;
