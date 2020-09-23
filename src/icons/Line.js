import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLine = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 2l11 11M1.5 2.5a1 1 0 110-2 1 1 0 010 2zm12 12a1 1 0 110-2 1 1 0 010 2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLine.displayName = "Line";

export default SvgLine;
