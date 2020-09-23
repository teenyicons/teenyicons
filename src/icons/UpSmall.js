import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M10.5 8.5l-3-3-3 3" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpSmall.displayName = "UpSmall";

export default SvgUpSmall;
