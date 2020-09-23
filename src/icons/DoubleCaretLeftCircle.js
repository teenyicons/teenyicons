import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeftCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.146 9.854l.354.353.707-.707-.353-.354-.708.708zM4.5 7.5l-.354-.354-.353.354.353.354L4.5 7.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zm2.292 4l.354.353.707-.707-.353-.354-.708.708zM7.5 7.5l-.354-.354-.353.354.353.354L7.5 7.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zm-3 3.292l-2-2-.708.708 2 2 .708-.708zm-2-1.292l2-2-.708-.708-2 2 .708.708zm5 1.292l-2-2-.708.708 2 2 .708-.708zm-2-1.292l2-2-.708-.708-2 2 .708.708zM7.5 15A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1zM0 7.5A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0zM7.5 0A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zm0 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeftCircle.displayName = "DoubleCaretLeftCircle";

export default SvgDoubleCaretLeftCircle;
