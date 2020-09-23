import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretRightCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.146 9.146l-.353.354.707.707.354-.353-.708-.708zM10.5 7.5l.354.354.353-.354-.353-.354-.354.354zM8.854 5.146L8.5 4.793l-.707.707.353.354.708-.708zm-3.708 4l-.353.354.707.707.354-.353-.708-.708zM7.5 7.5l.354.354.353-.354-.353-.354L7.5 7.5zM5.854 5.146L5.5 4.793l-.707.707.353.354.708-.708zm3 4.708l2-2-.708-.708-2 2 .708.708zm2-2.708l-2-2-.708.708 2 2 .708-.708zm-5 2.708l2-2-.708-.708-2 2 .708.708zm2-2.708l-2-2-.708.708 2 2 .708-.708zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretRightCircle.displayName = "DoubleCaretRightCircle";

export default SvgDoubleCaretRightCircle;
