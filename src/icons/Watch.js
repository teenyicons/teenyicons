import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWatch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 3.5h6m-6 0a1 1 0 00-1 1v6a1 1 0 001 1m0-8v-2a1 1 0 011-1h4a1 1 0 011 1v2m0 0a1 1 0 011 1v6a1 1 0 01-1 1m0 0h-6m6 0v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2m9-5.5v3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgWatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWatch.displayName = "Watch";

export default SvgWatch;
