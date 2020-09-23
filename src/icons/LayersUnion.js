import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersUnion = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 1.5v3h-3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-3h3a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLayersUnion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersUnion.displayName = "LayersUnion";

export default SvgLayersUnion;
