import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsPowerpoint = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.755 3.5a7 7 0 110 8M2.5 10V8.5m0 0v-3H5a1.5 1.5 0 110 3H2.5zm-1-5h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMsPowerpoint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMsPowerpoint.displayName = "MsPowerpoint";

export default SvgMsPowerpoint;
