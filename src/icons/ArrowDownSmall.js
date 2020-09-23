import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDownSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.854 8.854l.353-.354-.707-.707-.354.353.708.708zM7.5 10.5l-.354.354.354.353.354-.353L7.5 10.5zM5.854 8.146L5.5 7.793l-.707.707.353.354.708-.708zm3.292 0l-2 2 .708.708 2-2-.708-.708zm-1.292 2l-2-2-.708.708 2 2 .708-.708zM8 10.5V4H7v6.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowDownSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDownSmall.displayName = "ArrowDownSmall";

export default SvgArrowDownSmall;
