import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgElbowConnector = forwardRef(
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
          d="M1.5 0a1.5 1.5 0 101.415 2H7v12h5.085a1.5 1.5 0 100-1H8V1H2.915A1.5 1.5 0 001.5 0z"
          fill={color}
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
