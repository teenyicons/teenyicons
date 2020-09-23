import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGlobe = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 15v-3M4 14.5h7M11.469 1A6 6 0 113.5 9.972m4-7.472a3 3 0 100 6 3 3 0 000-6z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGlobe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGlobe.displayName = "Globe";

export default SvgGlobe;
