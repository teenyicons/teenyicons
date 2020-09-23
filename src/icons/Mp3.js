import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMp3 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-8 6l.354-.354A.5.5 0 002 6.5h.5zm1 1l-.354.354.354.353.354-.353L3.5 7.5zm1-1H5a.5.5 0 00-.854-.354L4.5 6.5zm2 0V6H6v.5h.5zm6 0l.4.3a.5.5 0 00-.4-.8v.5zm-1.5 2l-.4-.3a.5.5 0 00.4.8v-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM3 11V6.5H2V11h1zm-.854-4.146l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM4 6.5V11h1V6.5H4zm2.5.5h1V6h-1v1zm.5 4V8.5H6V11h1zm0-2.5v-2H6v2h1zm.5-.5h-1v1h1V8zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 009 7.5H8zM7.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 007.5 6v1zM10 7h2.5V6H10v1zm2.1-.8l-1.5 2 .8.6 1.5-2-.8-.6zM11 9h.5V8H11v1zm.5 1H10v1h1.5v-1zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0013 9.5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 8v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMp3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMp3.displayName = "Mp3";

export default SvgMp3;
