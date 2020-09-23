import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDownCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.854 8.854l.353-.354-.707-.707-.354.353.708.708zM7.5 10.5l-.354.354.354.353.354-.353L7.5 10.5zM5.854 8.146L5.5 7.793l-.707.707.353.354.708-.708zm4-2.292l.353-.354-.707-.707-.354.353.708.708zM7.5 7.5l-.354.354.354.353.354-.353L7.5 7.5zM5.854 5.146L5.5 4.793l-.707.707.353.354.708-.708zM14.5 7.5H14h.5zm-7-7V1 .5zm0 14v.5-.5zm-7-7H0h.5zm8.646.646l-2 2 .708.708 2-2-.708-.708zm-1.292 2l-2-2-.708.708 2 2 .708-.708zm1.292-5l-2 2 .708.708 2-2-.708-.708zm-1.292 2l-2-2-.708.708 2 2 .708-.708zM15 7.5A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1zM7.5 15A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1zM0 7.5A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0zm1 0A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretDownCircle.displayName = "DoubleCaretDownCircle";

export default SvgDoubleCaretDownCircle;
