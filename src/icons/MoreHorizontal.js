import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoreHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 7.5a.5.5 0 11-1 0 .5.5 0 011 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoreHorizontal.displayName = "MoreHorizontal";

export default SvgMoreHorizontal;
