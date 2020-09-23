import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeadphones = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 9.5h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1zm0 0v-3a6 6 0 1112 0v3m0 0h-1a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHeadphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeadphones.displayName = "Headphones";

export default SvgHeadphones;
