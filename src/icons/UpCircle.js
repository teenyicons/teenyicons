import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.146 8.854l.354.353.707-.707-.353-.354-.708.708zM7.5 5.5l.354-.354-.354-.353-.354.353.354.354zM4.146 8.146l-.353.354.707.707.354-.353-.708-.708zm6.708 0l-3-3-.708.708 3 3 .708-.708zm-3.708-3l-3 3 .708.708 3-3-.708-.708zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zm1 0A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpCircle.displayName = "UpCircle";

export default SvgUpCircle;
