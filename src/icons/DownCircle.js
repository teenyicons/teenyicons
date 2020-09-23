import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDownCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.854 6.146L4.5 5.793l-.707.707.353.354.708-.708zM7.5 9.5l-.354.354.354.353.354-.353L7.5 9.5zm3.354-2.646l.353-.354-.707-.707-.354.353.708.708zm-6.708 0l3 3 .708-.708-3-3-.708.708zm3.708 3l3-3-.708-.708-3 3 .708.708zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zm-1 0A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDownCircle.displayName = "DownCircle";

export default SvgDownCircle;
