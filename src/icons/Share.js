import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShare = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 7.5h4M11 4L8.5 7.495 11 11m3.5-8.501a2 2 0 01-4 0 2 2 0 014 0zm0 9.993a2 2 0 01-4 0 2 2 0 014 0zm-10-4.997a2 2 0 01-4 0 2 2 0 014 0z"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShare.displayName = "Share";

export default SvgShare;
