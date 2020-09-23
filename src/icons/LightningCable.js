import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLightningCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 5.5h6m-6 0a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1v-5a1 1 0 00-1-1m-6 0v-4a1 1 0 011-1h4a1 1 0 011 1v4M9 2.5H6M5.5 13v2m4-2v2"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLightningCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLightningCable.displayName = "LightningCable";

export default SvgLightningCable;
