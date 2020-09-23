import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRipple = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 1.5l3.06 3.316a4 4 0 005.88 0L13.5 1.5m-12 12l3.06-3.316a4 4 0 015.88 0L13.5 13.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgRipple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRipple.displayName = "Ripple";

export default SvgRipple;
