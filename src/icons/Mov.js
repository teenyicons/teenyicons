import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMov = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-8 6l.354-.354A.5.5 0 002 6.5h.5zm1 1l-.354.354.354.353.354-.353L3.5 7.5zm1-1H5a.5.5 0 00-.854-.354L4.5 6.5zm6 3H10v.207l.146.147.354-.354zm1 1l-.354.354a.5.5 0 00.708 0L11.5 10.5zm1-1l.354.354.146-.147V9.5h-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM3 11V6.5H2V11h1zm-.854-4.146l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM4 6.5V11h1V6.5H4zm4 1v2h1v-2H8zm-1 2v-2H6v2h1zm.5.5a.5.5 0 01-.5-.5H6A1.5 1.5 0 007.5 11v-1zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 009 9.5H8zM7.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 007.5 6v1zm0-1A1.5 1.5 0 006 7.5h1a.5.5 0 01.5-.5V6zM10 6v3.5h1V6h-1zm.146 3.854l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM13 9.5V6h-1v3.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMov.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMov.displayName = "Mov";

export default SvgMov;
