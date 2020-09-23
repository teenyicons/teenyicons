import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFigma = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 1v8.5m0 0v2a2 2 0 11-2-2m2 0h-2m0 0a2 2 0 110-4m0 0h2m-2 0h4m-4 0a2 2 0 110-4h4a2 2 0 110 4m0 0a2 2 0 110 4 2 2 0 010-4z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFigma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFigma.displayName = "Figma";

export default SvgFigma;
