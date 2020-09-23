import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTickSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M4 7.5L7 10l4-5" stroke={color} />
      </svg>
    );
  }
);

SvgTickSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTickSmall.displayName = "TickSmall";

export default SvgTickSmall;
