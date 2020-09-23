import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersDifference = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5v-3a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1h-3m-6-6h-3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-3m-6-6V7m0-2.5H7m3.5 6H8m2.5 0V8M8 4.5h2.5V7m-6 1v2.5H7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLayersDifference.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersDifference.displayName = "LayersDifference";

export default SvgLayersDifference;
