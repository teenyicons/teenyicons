import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImageAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 3.5h1m3.5 5.993l-3-2.998-3 2.998-4-4.996L.5 9.5m1-9h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgImageAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImageAlt.displayName = "ImageAlt";

export default SvgImageAlt;
