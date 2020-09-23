import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgZoomIn = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 14.5l-4-4M6.5 4v5M4 6.5h5m-2.5 6a6 6 0 110-12 6 6 0 010 12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgZoomIn.displayName = "ZoomIn";

export default SvgZoomIn;
