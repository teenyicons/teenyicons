import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMicrophone = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 4v2.5a5 5 0 005 5m5-7.5v2.5a5 5 0 01-5 5m0 0V15M5 14.5h5m-.5-12v4a2 2 0 11-4 0v-4a2 2 0 114 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMicrophone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMicrophone.displayName = "Microphone";

export default SvgMicrophone;
