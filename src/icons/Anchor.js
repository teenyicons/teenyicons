import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAnchor = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 4.497a2 2 0 002-1.998 2 2 0 00-4 0 2 2 0 002 1.998zm0 0v9.994m0 0c-3.866 0-7-3.132-7-6.996h2m5 6.996c3.866 0 7-3.132 7-6.996h-2"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgAnchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAnchor.displayName = "Anchor";

export default SvgAnchor;
