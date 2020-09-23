import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRightSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M6.5 10.5l3-3-3-3" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgRightSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRightSmall.displayName = "RightSmall";

export default SvgRightSmall;
