import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgElbowConnector = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 1.5a1 1 0 11-2 0 1 1 0 012 0zm0 0h5v12h5m0 0a1 1 0 102 0 1 1 0 00-2 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgElbowConnector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgElbowConnector.displayName = "ElbowConnector";

export default SvgElbowConnector;
