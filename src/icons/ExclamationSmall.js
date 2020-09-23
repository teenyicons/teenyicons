import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamationSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8 10.5V10H7v.5h1zm-1 .01v.5h1v-.5H7zM7 4v4h1V4H7zm0 6.5v.01h1v-.01H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamationSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamationSmall.displayName = "ExclamationSmall";

export default SvgExclamationSmall;
