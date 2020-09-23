import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFramer = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 5.5h5v-5h-10l5 5zm0 0h-5v4l5 5v-4h5l-5-5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgFramer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFramer.displayName = "Framer";

export default SvgFramer;
