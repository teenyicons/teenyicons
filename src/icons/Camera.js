import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCamera = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 1.5H2m12.5 11v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1zm-5-2a2 2 0 110-4 2 2 0 010 4z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCamera.displayName = "Camera";

export default SvgCamera;
