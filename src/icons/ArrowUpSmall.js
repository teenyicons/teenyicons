import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowUpSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.146 6.146l-.353.354.707.707.354-.353-.708-.708zM7.5 4.5l.354-.354-.354-.353-.354.353.354.354zm1.646 2.354l.354.353.707-.707-.353-.354-.708.708zm-3.292 0l2-2-.708-.708-2 2 .708.708zm1.292-2l2 2 .708-.708-2-2-.708.708zM7 4.5V11h1V4.5H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowUpSmall.displayName = "ArrowUpSmall";

export default SvgArrowUpSmall;
