import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTarget = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 7.5a7 7 0 1014 0 7 7 0 00-14 0z" stroke={color} />
        <path d="M3.5 7.5a4 4 0 108 0 4 4 0 00-8 0z" stroke={color} />
        <path d="M6.5 7.5a1 1 0 102 0 1 1 0 00-2 0z" stroke={color} />
      </svg>
    );
  }
);

SvgTarget.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTarget.displayName = "Target";

export default SvgTarget;
