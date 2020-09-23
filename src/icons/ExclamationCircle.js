import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamationCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8 10.5V10H7v.5h1zm-1 .01v.5h1v-.5H7zM7 4v4h1V4H7zm0 6.5v.01h1v-.01H7zm.5 3.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamationCircle.displayName = "ExclamationCircle";

export default SvgExclamationCircle;
