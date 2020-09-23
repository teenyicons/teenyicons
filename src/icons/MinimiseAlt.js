import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinimiseAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13 5.5H9.5m0 0V2m0 3.5l4-4M5.5 13V9.5m0 0H2m3.5 0l-4 4"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMinimiseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinimiseAlt.displayName = "MinimiseAlt";

export default SvgMinimiseAlt;
