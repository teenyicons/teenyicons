import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRand = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 14V8.5m0 0v-7H8a3.5 3.5 0 110 7H3.5zm0 0h5a3 3 0 013 3V14"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgRand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRand.displayName = "Rand";

export default SvgRand;
