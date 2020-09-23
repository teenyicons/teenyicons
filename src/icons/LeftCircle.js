import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeftCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.854 4.854l.353-.354-.707-.707-.354.353.708.708zM5.5 7.5l-.354-.354-.353.354.353.354L5.5 7.5zm2.646 3.354l.354.353.707-.707-.353-.354-.708.708zm0-6.708l-3 3 .708.708 3-3-.708-.708zm-3 3.708l3 3 .708-.708-3-3-.708.708zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeftCircle.displayName = "LeftCircle";

export default SvgLeftCircle;
