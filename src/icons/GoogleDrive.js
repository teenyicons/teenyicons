import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleDrive = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 1.5l-4.5 8 2 4M5 1.5l2.5 4-5 8M5 1.5h5l4.5 8M5 1.5l5 8h4.5m-12 4l2.5-4h9.5m-12 4h10l2-4"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgGoogleDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleDrive.displayName = "GoogleDrive";

export default SvgGoogleDrive;
