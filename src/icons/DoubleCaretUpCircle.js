import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUpCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.146 6.146l-.353.354.707.707.354-.353-.708-.708zM7.5 4.5l.354-.354-.354-.353-.354.353.354.354zm1.646 2.354l.354.353.707-.707-.353-.354-.708.708zm-4 2.292l-.353.354.707.707.354-.353-.708-.708zM7.5 7.5l.354-.354-.354-.353-.354.353.354.354zm1.646 2.354l.354.353.707-.707-.353-.354-.708.708zM.5 7.5H0h.5zm7 7v.5-.5zm0-14V1 .5zm7 7H14h.5zm-8.646-.646l2-2-.708-.708-2 2 .708.708zm1.292-2l2 2 .708-.708-2-2-.708.708zm-1.292 5l2-2-.708-.708-2 2 .708.708zm1.292-2l2 2 .708-.708-2-2-.708.708zM0 7.5A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0zM7.5 0A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM15 7.5A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1zm-1 0A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUpCircle.displayName = "DoubleCaretUpCircle";

export default SvgDoubleCaretUpCircle;
