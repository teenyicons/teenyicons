import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersIntersect = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 3V1.5a1 1 0 011-1H7m5 0h1.5a1 1 0 011 1V3M8 .5h3m1 10h1.5a1 1 0 001-1V8m0-4v3M3 4.5H1.5a1 1 0 00-1 1V7m0 5v1.5a1 1 0 001 1H3M.5 8v3M8 14.5h1.5a1 1 0 001-1V12M4 14.5h3m-2.5-10v6h6v-6h-6z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLayersIntersect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersIntersect.displayName = "LayersIntersect";

export default SvgLayersIntersect;
