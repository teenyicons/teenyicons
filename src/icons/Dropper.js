import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDropper = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 12.5l-.354-.354-.146.147v.207h.5zM8 5l.354-.354a.5.5 0 00-.708 0L8 5zm2 2l.354.354a.5.5 0 000-.708L10 7zm-7.5 7.5v.5h.207l.147-.146L2.5 14.5zm-2 0H0a.5.5 0 00.5.5v-.5zm7-10l-.354-.354-.353.354.353.354L7.5 4.5zm3.086-3.086l-.354-.353.354.353zm2.828 0l-.353.354.353-.354zm.172.172l.353-.354-.353.354zm0 2.828l-.354-.353.354.353zM10.5 7.5l-.354.354.354.353.354-.353L10.5 7.5zM.854 12.854l7.5-7.5-.708-.708-7.5 7.5.708.708zm6.792-7.5l2 2 .708-.708-2-2-.708.708zm2 1.292l-7.5 7.5.708.708 7.5-7.5-.708-.708zM2.5 14h-2v1h2v-1zm-1.5.5v-2H0v2h1zM6.146 3.854l5 5 .708-.708-5-5-.708.708zm1.708 1l3.085-3.086-.707-.707-3.086 3.085.708.708zm5.207-3.086l.171.171.707-.707-.171-.171-.707.707zm.171 2.293l-3.086 3.085.708.708 3.085-3.086-.707-.707zm-2.378 3.085l-3-3-.708.708 3 3 .708-.708zm2.378-5.207a1.5 1.5 0 010 2.122l.707.707a2.5 2.5 0 000-3.536l-.707.707zm-2.293-.171a1.5 1.5 0 012.122 0l.707-.707a2.5 2.5 0 00-3.536 0l.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDropper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDropper.displayName = "Dropper";

export default SvgDropper;
