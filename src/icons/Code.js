import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCode = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.146 10.146l-.353.354.707.707.354-.353-.708-.708zM13.5 7.5l.354.354.353-.354-.353-.354-.354.354zm-2.646-3.354l-.354-.353-.707.707.353.354.708-.708zm-6.708 6.708l.354.353.707-.707-.353-.354-.708.708zM1.5 7.5l-.354-.354-.353.354.353.354L1.5 7.5zm3.354-2.646l.353-.354-.707-.707-.354.353.708.708zm6 6l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zm-9 3l-3-3-.708.708 3 3 .708-.708zm-3-2.292l3-3-.708-.708-3 3 .708.708zm6.153-6.436l-2 12 .986.164 2-12-.986-.164z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCode.displayName = "Code";

export default SvgCode;
