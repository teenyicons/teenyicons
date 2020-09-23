import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExpandAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 1.5h3.5m0 0V5m0-3.5l-4 4m-8 4.5v3.5m0 0H5m-3.5 0l4-4"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgExpandAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExpandAlt.displayName = "ExpandAlt";

export default SvgExpandAlt;
