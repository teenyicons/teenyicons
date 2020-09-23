import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDownCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.854 8.146L5.5 7.793l-.707.707.353.354.708-.708zM7.5 10.5l-.354.354.354.353.354-.353L7.5 10.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zM.5 7.5H0h.5zm7-7V0v.5zm0 14V14v.5zm7-7H14h.5zM5.146 8.854l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708zM8 10.5V4H7v6.5h1zm-7-3A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zm1 0A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDownCircle.displayName = "ArrowDownCircle";

export default SvgArrowDownCircle;
