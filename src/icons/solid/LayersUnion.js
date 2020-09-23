import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersUnion = forwardRef(
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
          d="M5.5 0A1.5 1.5 0 004 1.5V4H1.5A1.5 1.5 0 000 5.5v8A1.5 1.5 0 001.5 15h8a1.5 1.5 0 001.5-1.5V11h2.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-8z"
          fill={color}
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
